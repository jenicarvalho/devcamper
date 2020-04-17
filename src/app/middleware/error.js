import ErrorResponse from "../utils/errorResponse"

const errorHandler = (err, req, res, next) => {
  console.log(`\n \n STACK ERROR: \n`.bgRed.white.bold)
  console.log(err.stack.bgRed.white)

  let error = { ...err }

  // mongoose bad objectId
  if (err.name === 'CastError') {
    const message = `Bootcamp not found with id of ${err.value}`
    error = new ErrorResponse(message, 404)
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  })
}

export default errorHandler