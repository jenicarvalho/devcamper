import dotenv from 'dotenv'
import colors from 'colors'
import app from './app'
import connectDB from './config/db'
import { PORT } from './config/vars'

// Load env vars
dotenv.config()

connectDB()

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on PORT ${PORT}`.bgYellow.black.bold
  )
)

// Handle unhandledRejections
process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`)
  server.close(() => process.exit(1))
})
