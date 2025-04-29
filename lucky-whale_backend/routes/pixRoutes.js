import express from 'express'
import {
  createPayment,
} from '../utils/pixService.js'

const router = express.Router()

router.post('/create-payment', createPayment)
// router.get('/get-by/:id', getTicketsById)

export default router
