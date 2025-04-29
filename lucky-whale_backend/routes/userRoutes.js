import express from 'express'
import {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController.js'
import { authenticateUser } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/register', registerUser)
router.get('/list-users', getAllUsers)
router.get('/get-by/:id', getUserById)
router.put('/update/:id', authenticateUser, updateUser)
router.delete('/delete/:id', authenticateUser, deleteUser)

export default router
