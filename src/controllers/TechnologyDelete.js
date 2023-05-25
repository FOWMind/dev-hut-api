const { Technology } = require('../models')

const TechnologyDelete = (req, res, next) => {
  const { id } = req.params
  if (!id) {
    res.status(400).json({ message: 'bad request' })
    return
  }

  Technology.findOneAndDelete({ _id: id })
    .then(doc => {
      if (!doc) {
        res.status(404).json({ message: 'not found' })
        return
      }

      res.status(200).json({ message: 'technology deleted successfully' })
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(409).json({ message: 'error while deleting technology' })
      return
    })
}

module.exports = { TechnologyDelete }
