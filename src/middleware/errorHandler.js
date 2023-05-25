const errorHandler = (err, req, res) => {
  if (err.name === 'CastError') {
    res.status(400).json({ message: 'bad request' })
    return
  }

  console.error(err)
}

module.exports = { errorHandler }
