import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// Basic Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    message: `CODEZA Server is running on port ${PORT}`,
    timestamp: new Date()
  })
})

// Catch-all 404 Route
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' })
})

// Start Server
app.listen(PORT, () => {
  console.log(`CODEZA Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`)
})
