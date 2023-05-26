const { HTTP_RESPONSES: { BAD_REQUEST } } = require('../constants')

const errorHandler = (err, req, res) => {
  if (err.name === 'CastError') {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  console.error(err)
}

module.exports = { errorHandler }
