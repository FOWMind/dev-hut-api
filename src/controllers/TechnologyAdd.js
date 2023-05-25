const { Technology } = require('../models')

const TechnologyAdd = (req, res, next) => {
  const { name, description, categories } = req.body

  if (
    !req.body || Object.entries(req.body).length === 0
    || !name || !description || !categories
  ) {
    res.status(400).json({ message: 'bad request' })
    return
  }

  const newTechnology = {
    name,
    description,
    categories,
    createdAt: new Date(),
  }

  Technology.create(newTechnology)
    .then(doc => {
      console.log('Technology added at ', newTechnology.createdAt)
      res.status(201).json({ message: 'technology added', data: doc })
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(409).json({ message: 'error while adding technology' })
      return
    })
}

module.exports = { TechnologyAdd }
