import bcrypt from 'bcryptjs'
import prisma from '../config/prismaClient.js'
import logger from '../utils/logger.js'
import { updateTerritory } from './territoryController.js'

export const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      birthDate,
      password,
      cep,
      street,
      streetNumber,
      complement,
      neighborhood,
      city,
      uf,
    } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        birthDate: new Date(birthDate),
        cep,
        street,
        streetNumber,
        complement,
        neighborhood,
        city,
        uf,
        password: hashedPassword,
      },
    })

    // const territory = await prisma.territory.create({
    //   data: {
    //     userId: user.id,
    //     country: 'allCountries',
    //     stateScope: null,
    //     states: [],
    //     cityScope: null,
    //   },
    // })

    // res.status(201).json(user, territory)
    res.status(201).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao cadastrar usuário.' })
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Erro ao buscar usuários' })
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
      include: {
        raffles: true,
        territory: true,
      },
    })
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' })

    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Erro ao buscar usuário' })
  }
}

export const updateUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      birthDate,
      cep,
      street,
      streetNumber,
      complement,
      neighborhood,
      city,
      uf,
    } = req.body

    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: {
        fullName,
        email,
        birthDate: new Date(birthDate),
        cep,
        street,
        streetNumber,
        complement,
        neighborhood,
        city,
        uf,
      },
    })

    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Erro ao atualizar usuário' })
  }
}

export const deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({ where: { id: req.params.id } })
    res.status(204).send()
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Erro ao excluir usuário' })
  }
}
