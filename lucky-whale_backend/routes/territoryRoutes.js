import express from 'express'
import { updateTerritory } from '../controllers/territoryController.js'
import { authenticateUser } from '../middleware/authMiddleware.js'

const router = express.Router()

router.put('/update', authenticateUser, updateTerritory)

export default router
