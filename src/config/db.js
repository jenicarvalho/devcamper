import mongoose from 'mongoose'
import colors from 'colors'
import { MONGO_URI } from './vars'

const connectDB = async () => {
  const conn = await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .catch((error) => console.log(error))

  console.log(`MongoDB connected: ${conn.connection.host}`.bgGreen.black)
}

export default connectDB
