const { Technology } = require('../models')
const { HTTP_RESPONSES: { SUCCESS, NOT_FOUND } } = require('../constants')

const Technologies = (req, res, next) => {
  Technology.find({})
    .then(docs => {
      res.status(SUCCESS.CODE).json(docs)
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(NOT_FOUND.CODE).json(NOT_FOUND.JSON)
      return
    })
}

module.exports = { Technologies }
