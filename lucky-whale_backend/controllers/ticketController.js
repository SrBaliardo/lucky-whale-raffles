import prisma from '../config/prismaClient.js'

export const getAllTickets = async (req, res) => {
  try {
    const tickets = await prisma.ticket.findMany()
    res.json(tickets)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: 'Erro ao buscar tickets' })
  }
}

export const getTicketsById = async (req, res) => {
  try {
    const { id } = req.params
    const ticket = await prisma.ticket.findUnique({
      where: { id },
    })

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket não encontrado!' })
    }

    res.json(ticket)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar ticket.' })
  }
}
