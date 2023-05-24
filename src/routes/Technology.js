const express = require('express')

const markdown = require('../lib/markdown')
const { TechnologyByName } = require('../controllers')
const { Technology } = require('../models')

const router = express.Router()

router.get('/:name', TechnologyByName)

router.post('/', (req, res, next) => {
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
      res.status(201).json({ message: 'Technology added', data: doc })
      return
    })
    .catch(err => {
      // next(err)
      return res.status(409).json({ message: 'Error while adding technology' })
    })
})

module.exports = router
