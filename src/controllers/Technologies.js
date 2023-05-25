const { Technology } = require('../models')

const Technologies = (req, res, next) => {
  Technology.find({})
    .then(docs => {
      res.status(200).json(docs)
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(404).json({ message: 'not found' })
      return
    })
}

module.exports = { Technologies }
