import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
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

    // if (process.env.NODE_ENV === 'development') {
    //   this.server.use(morgan('dev'))
    // }
  }

  routes() {
    this.server.use('/api/v1/bootcamps', bootcamps)
  }
}

export default new App().server