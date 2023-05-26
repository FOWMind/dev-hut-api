const { HTTP_RESPONSES: { SUCCESS } } = require('../constants')

const requestHandler = (req, res, next) => {
  res.status(SUCCESS.CODE).end()
}

module.exports = { requestHandler }
