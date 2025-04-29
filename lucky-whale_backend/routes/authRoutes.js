import express from 'express'
import {
  login,
  resetPassword,
  changePassword,
} from '../controllers/authController.js'
import { authenticateUser } from '../middleware/authMiddleware.js'
import {
  loginLimiter,
  resetPasswordLimiter,
} from '../middleware/rateLimiter.js'

const router = express.Router()

router.post('/login', login)
router.put('/reset-password', resetPasswordLimiter, resetPassword)
router.put('/change-password', authenticateUser, changePassword)

export default router
