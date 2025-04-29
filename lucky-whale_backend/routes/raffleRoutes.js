import express from 'express'
import { authenticateUser } from '../middleware/authMiddleware.js'
import {
  registerRaffle,
  getAllRaffles,
  getRafflesByUser,
  getRaffleById,
  updateRaffle,
  deleteRaffle,
} from '../controllers/raffleController.js'

const router = express.Router()

router.post('/register', authenticateUser, registerRaffle)
router.get('/list-raffles', getAllRaffles)
router.get('/list-user-raffles/:id', authenticateUser, getRafflesByUser)
router.put('/update/:id', authenticateUser, updateRaffle)
router.delete('/delete/:id', authenticateUser, deleteRaffle)
router.get('/get-by/:id', getRaffleById)

export default router
