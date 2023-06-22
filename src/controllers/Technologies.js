const { Technology } = require('../models')
const { HTTP_RESPONSES: { SUCCESS, CONFLICT } } = require('../constants')

const Technologies = (req, res, next) => {
  Technology.find({})
    .then(docs => {
      res.status(SUCCESS.CODE).json(docs)
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error while trying to get technologies' })
      return
    })
}

module.exports = { Technologies }
