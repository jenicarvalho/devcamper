import express from 'express'
import cors from 'cors'
import bootcamps from './routes/bootcamps'
import errorHandler from './app/middleware/error'

class App {
  constructor() {
    this.server = express()
    this.routes()
    this.middlewares()
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(express.json())
    this.server.use(errorHandler)
  }

  routes() {
    this.server.use('/api/v1/bootcamps', bootcamps)
  }
}

export default new App().server