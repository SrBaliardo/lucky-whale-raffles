import express from 'express'
import {
  getAllTickets,
  getTicketsById,
} from '../controllers/ticketController.js'

const router = express.Router()

router.get('/list-tickets', getAllTickets)
router.get('/get-by/:id', getTicketsById)

export default router
