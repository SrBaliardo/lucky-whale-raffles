import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import logger from './logger.js'

dotenv.config()

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.EMAIL_PORT == 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export const sendOrderEmail = async (email, fullName, order, tickets) => {
  if (process.env.EMAIL_ENABLED !== 'true') {
    logger.info('Envio de e-mail está desativado.')
    return
  }
  const ticketList = tickets
    .map((ticket) => `• ${ticket.identifier}`)
    .join('<br/>')

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Confirmação de Compra - Lucky Whale Raffles',
    html: `
            <h2>Olá, ${fullName}!</h2>
            <p>Sua compra foi confirmada. Aqui estão os detalhes:</p>
            <p><strong>Ordem:</strong> ${order.id}</p>
            <p><strong>Quantidade de bilhetes:</strong> ${order.ticketQuantity}</p>
            <p><strong>Valor pago:</strong> R$ ${order.totalOrderPrice}</p>
            <p><strong>Seus bilhetes:</strong></p>
            <ul>${ticketList}</ul>
            <p>Boa sorte!</p>
        `,
  }

  try {
    await transporter.sendMail(mailOptions)
    logger.info(`E-mail enviado para ${to}`)
    console.log(`E-mail enviado para ${email}`)
  } catch (error) {
    logger.error('Erro ao enviar e-mail', { error })
    console.error('Erro ao enviar e-mail:', error)
  }
}
