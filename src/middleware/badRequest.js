const badRequest = (req, res) => {
  res.status(400).json({ message: 'bad request' })
}

module.exports = { badRequest }
