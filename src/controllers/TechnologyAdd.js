const { Technology } = require('../models')
const { HTTP_RESPONSES: { CREATED, BAD_REQUEST, CONFLICT } } = require('../constants')

const TechnologyAdd = async (req, res, next) => {
  const { name, description, categories } = req.body

  if (
    Object.entries(req.body).length === 0 ||
    !req.body || !name || !description || !categories
  ) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  const technologyCount = await Technology.countDocuments({ name: name?.toString()?.toLowerCase() }, { limit: 1 })
  if (technologyCount > 0) {
    res.status(CONFLICT.CODE).json({ message: 'a technology with that name already exist' })
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
      res.status(CREATED.CODE).json({ message: 'technology added', data: doc })
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error while adding technology' })
      return
    })
}

module.exports = { TechnologyAdd }
