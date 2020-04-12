import express from 'express'
import cors from 'cors'
import bootcamps from './routes/bootcamps'

class App {
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(express.json())
  }

  routes() {
    this.server.use('/api/v1/bootcamps', bootcamps)
  }
}

export default new App().server