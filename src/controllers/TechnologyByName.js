const { Technology } = require('../models')
const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, CONFLICT } } = require('../constants')

const TechnologyByName = (req, res, next) => {
	let { name } = req.params

  if (!name) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  name = name.toLowerCase()
  Technology.findOne({ name })
    .then((technology) => {
      res.status(SUCCESS.CODE).json(technology)
      return
    })
    .catch((err) => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error while trying to get technology' })
      return
    })
}

module.exports = { TechnologyByName }
