const { Technology } = require('../models')

const TechnologyDelete = (req, res, next) => {
  const { id } = req.params
  if (!id) {
    res.status(400).json({ message: 'bad request' })
    return
  }

  Technology.findOneAndDelete({ _id: id })
    .then(doc => {
      res.status(200).json({ message: 'deleted successfully' })
      return
    })
    .catch(err => {
      // next(err)
      console.log(err)
      res.status(409).json({ message: 'error while deleting technology' })
      return
    })
}

module.exports = { TechnologyDelete }
