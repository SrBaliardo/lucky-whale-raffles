import prisma from '../config/prismaClient.js'
import { sendOrderEmail } from '../utils/emailService.js'
import logger from '../utils/logger.js'

export const createOrderAndGenerateTickets = async (req, res) => {
  try {
    logger.info('Recebendo requisição para criar uma ordem e gerar tickets', {
      body: req.body,
    })

    const {
      raffleId,
      ticketQuantity,
      totalOrderPrice,
      buyerName,
      buyerId,
      buyerEmail,
      buyerPhone,
      methodPayment,
    } = req.body
    const raffle = await prisma.raffle.findUnique({ where: { id: raffleId } })

    if (!raffle) {
      logger.warn(`Rifa não encontrada: ${raffleId}`)
      return res.status(404).json({ error: 'Rifa não encontrada!' })
    }

    const order = await prisma.order.create({
      data: {
        raffleId,
        ticketQuantity,
        totalOrderPrice,
        buyerName,
        buyerId,
        buyerEmail,
        buyerPhone,
        methodPayment,
        status: 'CONFIRMED',
      },
    })

    const lastTicket = await prisma.ticket.findFirst({
      where: { raffleId },
      orderBy: { number: 'desc' },
    })

    let lastNumber = lastTicket ? lastTicket.number : 0
    const newTickets = []

    for (let i = 1; i <= ticketQuantity; i++) {
      lastNumber++
      newTickets.push({
        id: `Rifa${raffleId}-${String(lastNumber).padStart(5, '0')}`,
        raffleId,
        orderId: order.id,
        number: lastNumber,
        identifier: `Rifa${raffleId}-${String(lastNumber).padStart(5, '0')}`,
      })
    }

    await prisma.$transaction([
      prisma.ticket.createMany({ data: newTickets }),

      prisma.raffle.update({
        where: { id: raffleId },
        data: {
          ticketsAmount: {
            increment: ticketQuantity,
          },
          moneyAmount: {
            increment: ticketQuantity * raffle.ticketPrice,
          },
        },
      }),
    ])

    logger.info(`Tickets gerados com sucesso para a rifa ${raffleId}`, {
      ticketQuantity,
    })

    const generatedTickets = await prisma.ticket.findMany({
      where: { raffleId, orderId: order.id },
      orderBy: { number: 'asc' },
    })

    // const EMAIL_ENABLED = process.env.EMAIL_ENABLED === 'true';
    // if (EMAIL_ENABLED) {
    //   await sendOrderEmail(user.email, user.fullName, order, generatedTickets);
    // }

    res.status(201).json({
      message: 'Ordem criada e bilhetes gerados com sucesso!',
      order,
      tickets: generatedTickets,
    })
  } catch (error) {
    logger.error('Erro ao processar a compra', { error })
    console.error(error)
    res.status(500).json({ error: 'Erro ao processar a compra.' })
  }
}

export const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany()
    res.json(orders)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Erro ao buscar ordens' })
  }
}

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        tickets: true,
      },
    })

    if (!order) {
      return res.status(404).json({ error: 'Ordem não encontrada!' })
    }

    res.json(order)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar ordem.' })
  }
}
