import prisma from '../config/prismaClient.js'

export const registerRaffle = async (req, res) => {
  try {
    const userId = req.user.id

    const {
      title,
      phone,
      raffleDescription,
      beneficiary,
      raffleImageURL,
      prizeDescription,
      prizeImageURL,
      drawDate,
      ticketPrice,
      bankAccountName,
      bankAccountId,
      bankAccountInstitution,
      bankAccountAgency,
      bankAccountNumber,
      bankAccountNumberDigit,
      bankAccountKey,
      bankAccountSavings,
      titularCep,
      titularStreet,
      titularStreetNumber,
      titularComplement,
      titularNeighborhood,
      titularCity,
      titularUf,
      termsPrivacy_Use,
      termsTrueInformation,
    } = req.body

    const raffle = await prisma.raffle.create({
      data: {
        userId,
        title,
        phone,
        raffleDescription,
        beneficiary,
        raffleImageURL,
        prizeDescription,
        prizeImageURL,
        drawDate: new Date(drawDate),
        ticketPrice,
        bankAccountName,
        bankAccountId,
        bankAccountInstitution,
        bankAccountAgency,
        bankAccountNumber,
        bankAccountNumberDigit,
        bankAccountKey,
        bankAccountSavings,
        titularCep,
        titularStreet,
        titularStreetNumber,
        titularComplement,
        titularNeighborhood,
        titularCity,
        titularUf,
        termsPrivacy_Use,
        termsTrueInformation,
      },
    })

    res
      .status(201)
      .json({ message: 'Cadastrada com sucesso!', Rifa: raffle.id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao cadastrar rifa.' })
  }
}

export const getAllRaffles = async (req, res) => {
  try {
    const raffles = await prisma.raffle.findMany()
    res.json(raffles)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Erro ao buscar rifas' })
  }
}

export const getRafflesByUser = async (req, res) => {
  try {
    const userId = req.user.id
    const raffles = await prisma.raffle.findMany({
      where: { userId },
    })

    res.json(raffles)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar rifas por usuário.' })
  }
}

export const getRaffleById = async (req, res) => {
  try {
    const { id } = req.params
    const raffle = await prisma.raffle.findUnique({
      where: { id },
      include: {
        orders: {
          include: {
            tickets: true,
          },
        },
        tickets: true,
        user: true,
      },
    })

    if (!raffle) {
      return res.status(404).json({ error: 'Rifa não encontrada!' })
    }

    res.json(raffle)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar rifa.' })
  }
}

export const updateRaffle = async (req, res) => {
  try {
    const userId = req.user.id
    const {
      title,
      phone,
      raffleDescription,
      beneficiary,
      raffleImageURL,
      prizeDescription,
      prizeImageURL,
      drawDate,
      ticketPrice,
      bankAccountName,
      bankAccountId,
      bankAccountInstitution,
      bankAccountAgency,
      bankAccountNumber,
      bankAccountNumberDigit,
      bankAccountKey,
      bankAccountSavings,
      titularCep,
      titularStreet,
      titularStreetNumber,
      titularComplement,
      titularNeighborhood,
      titularCity,
      titularUf,
      termsPrivacy_Use,
      termsTrueInformation,
    } = req.body

    const raffle = await prisma.raffle.update({
      where: { id: req.params.id },
      data: {
        userId,
        title,
        phone,
        raffleDescription,
        beneficiary,
        raffleImageURL,
        prizeDescription,
        prizeImageURL,
        drawDate: new Date(drawDate),
        ticketPrice,
        bankAccountName,
        bankAccountId,
        bankAccountInstitution,
        bankAccountAgency,
        bankAccountNumber,
        bankAccountNumberDigit,
        bankAccountKey,
        bankAccountSavings,
        titularCep,
        titularStreet,
        titularStreetNumber,
        titularComplement,
        titularNeighborhood,
        titularCity,
        titularUf,
        termsPrivacy_Use,
        termsTrueInformation,
      },
    })

    res.json(raffle)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Erro ao atualizar rifa' })
  }
}

export const deleteRaffle = async (req, res) => {
  try {
    await prisma.raffle.delete({ where: { id: req.params.id } })
    res.status(204).send()
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Erro ao excluir rifa' })
  }
}

export const updateRaffleStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { hasDraw } = req.body

    const raffle = await prisma.raffle.findUnique({ where: { id } })

    if (!raffle) {
      return res.status(404).json({ message: 'Rifa não encontrada.' })
    }

    const updatedStatus = hasDraw ? 'Finalizada' : 'Ativa'

    const updatedRaffle = await prisma.raffle.update({
      where: { id },
      data: {
        hasDraw,
        status: updatedStatus,
      },
    })

    res.json(updatedRaffle)
  } catch (error) {
    console.error('Erro ao atualizar rifa:', error)
    res.status(500).json({ message: 'Erro ao atualizar rifa.' })
  }
}
