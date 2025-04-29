import express from 'express'
import {
  createOrderAndGenerateTickets,
  getAllOrders,
  getOrderById,
} from '../controllers/orderController.js'

const router = express.Router()

router.post('/register', createOrderAndGenerateTickets)
router.get('/list-orders', getAllOrders)
router.get('/get-by/:id', getOrderById)

export default router
