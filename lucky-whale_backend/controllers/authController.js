import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../config/prismaClient.js'
import dotenv from 'dotenv'
import logger from '../utils/logger.js'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey'

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      logger.warn(
        `Tentativa de login falhou: Usuário não encontrado (${email})`
      )
      return res.status(401).json({ error: 'Credenciais inválidas' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      logger.warn(`Tentativa de login falhou: Senha incorreta (${email})`)
      return res.status(401).json({ error: 'Credenciais inválidas' })
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        birthDate: user.birthDate,
      },
      JWT_SECRET,
      { expiresIn: '2h' }
    )

    logger.info(`Usuário logado com sucesso: ${email}`)

    res.json({ token })
  } catch (error) {
    logger.error('Erro no login', { error })
    console.error(error)
    res.status(500).json({ error: 'Erro ao realizar login.' })
  }
}

export const changePassword = async (req, res) => {
  try {
    const { userId, currentPassword, newPassword } = req.body

    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) {
      logger.warn(`Usuário não encontrado: ${userId}`)
      return res.status(404).json({ message: 'Usuário não encontrado.' })
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password)
    if (!isPasswordValid) {
      logger.warn(`Senha incorreta para o usuário: ${userId}`)
      return res.status(401).json({ message: 'Senha atual incorreta.' })
    }

    if (currentPassword === newPassword) {
      return res
        .status(400)
        .json({ message: 'A nova senha deve ser diferente da atual.' })
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    })

    logger.info(`Senha alterada com sucesso para o usuário: ${userId}`)

    res.json({ message: 'Senha alterada com sucesso.' })
  } catch (error) {
    logger.error('Erro ao atualizar senha', { error })
    console.error('Erro ao alterar senha:', error)
    res.status(500).json({ message: 'Erro ao alterar senha.' })
  }
}

export const resetPassword = async (req, res) => {
  try {
    const { fullName, email } = req.body

    if (!fullName || !email) {
      return res
        .status(400)
        .json({ error: 'Nome completo e email são obrigatórios!' })
    }

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user || user.fullName !== fullName) {
      logger.warn(`Tentativa de reset de senha falhou para o e-mail: ${email}`)
      return res
        .status(404)
        .json({ error: 'Usuário não encontrado ou dados inválidos!' })
    }

    const newPassword = 'senha123'
    const hashedPassword = await bcrypt.hash(newPassword, 10)

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    })

    logger.info(`Senha resetada com sucesso para o usuário: ${email}`)

    res.status(200).json({
      message:
        'Senha resetada com sucesso! Utilize "senha123" para acessar e altere-a o quanto antes.',
    })
  } catch (error) {
    logger.error('Erro ao resetar senha', { error })
    console.error(error)
    res.status(500).json({ error: 'Erro ao resetar a senha.' })
  }
}

export const requestPasswordReset = async (req, res) => {
  try {
    const { fullName, email } = req.body

    if (!fullName || !email) {
      return res
        .status(400)
        .json({ error: 'Nome completo e email são obrigatórios!' })
    }

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || user.fullName !== fullName) {
      logger.warn(`Tentativa de reset de senha falhou para o e-mail: ${email}`)
      return res
        .status(404)
        .json({ error: 'Usuário não encontrado ou dados inválidos!' })
    }

    const resetToken = crypto.randomBytes(32).toString('hex')
    const hashedToken = await bcrypt.hash(resetToken, 10)
    const tokenExpiry = new Date(Date.now() + 3600000)

    await prisma.user.update({
      where: { email },
      data: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: tokenExpiry,
      },
    })

    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}&email=${email}`

    await sendEmail({
      to: email,
      subject: 'Redefinição de Senha',
      text: `Olá ${fullName},

Clique no link abaixo para redefinir sua senha. Esse link expirará em 1 hora.

${resetLink}`,
    })

    logger.info(`Link de reset enviado para: ${email}`)
    res.json({
      message: 'Um e-mail foi enviado com instruções para redefinir sua senha.',
    })
  } catch (error) {
    logger.error('Erro ao solicitar redefinição de senha', { error })
    res.status(500).json({ error: 'Erro ao processar solicitação.' })
  }
}

export const confirmResetPassword = async (req, res) => {
  try {
    const { email, token, newPassword } = req.body

    if (!email || !token || !newPassword) {
      return res
        .status(400)
        .json({ error: 'Todos os campos são obrigatórios!' })
    }

    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { email },
    })

    if (!resetToken || resetToken.token !== token) {
      logger.warn(`Tentativa de redefinição inválida para o e-mail: ${email}`)
      return res.status(400).json({ error: 'Token inválido ou expirado!' })
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    })

    await prisma.passwordResetToken.delete({ where: { email } })

    logger.info(`Senha redefinida com sucesso para o usuário: ${email}`)
    res.json({ message: 'Senha redefinida com sucesso!' })
  } catch (error) {
    logger.error('Erro ao redefinir senha', { error })
    console.error(error)
    res.status(500).json({ error: 'Erro ao redefinir a senha.' })
  }
}
