const { Technology } = require('../models')
const {
  HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, CONFLICT },
} = require('../constants')

const TechnologiesByArea = (req, res, next) => {
  const { area } = req.params

  if (!area) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  Technology.find({ areas: area })
    .then((technologies) => {
      res.status(SUCCESS.CODE).json(technologies)
      return
    })
    .catch((err) => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error while trying to get technologies by area' })
      return
    })
}

module.exports = { TechnologiesByArea }
