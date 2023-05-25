const { Technology } = require('../models')

const TechnologyEdit = (req, res, next) => {
  const { id } = req.params
  const update = req.body

  if (!id || !req.body || Object.entries(update).length === 0) {
    res.status(400).json({ message: 'bad request' })
    return
  }

  Technology.findOneAndUpdate({ _id: id }, update, { new: true })
    .then((doc) => {
      res.status(200).json({ message: 'technology edited successfully', data: doc })
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(409).json({ message: 'error while editing technology' })
      return
    })
}

module.exports = { TechnologyEdit }
