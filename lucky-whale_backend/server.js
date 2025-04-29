import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import raffleRoutes from './routes/raffleRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import ticketRoutes from './routes/ticketRoutes.js'
import pixRoutes from './routes/pixRoutes.js'
import territoryRoutes from './routes/territoryRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
// app.use(
//   cors({
//     origin: ['https://lucky-whale-raffles.vercel.app'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
//   })
// )
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

app.use('/api/auth', authRoutes)

app.use('/api/users', userRoutes)

app.use('/api/raffles', raffleRoutes)

app.use('/api/orders', orderRoutes)

app.use('/api/tickets', ticketRoutes)

app.use('/api/pix', pixRoutes)

app.use('/api/territory', territoryRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`🚀 Server is UP on PORT: ${PORT} ✅`)
})
