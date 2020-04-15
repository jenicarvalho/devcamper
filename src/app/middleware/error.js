const errorHandler = (error, req, res, next) => {
  console.log(`\n \n STACK ERROR: \n`.bgRed.white.bold)
  console.log(error.stack.bgRed.white)

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  })
}

export default errorHandler