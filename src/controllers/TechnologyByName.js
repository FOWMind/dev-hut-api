const markdown = require('../lib/markdown')
const { Technology } = require('../models')
const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, NOT_FOUND } } = require('../constants')

const TechnologyByName = (req, res, next) => {
	let { name } = req.params

  if (!name) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  name = name.toLowerCase()
  Technology.findOne({ name })
    .then((doc) => {
      if (!doc) {
        res.status(NOT_FOUND.CODE).json(NOT_FOUND.JSON)
        return
      }
      const md = markdown.parse(name)
      res.status(SUCCESS.CODE).json({ ...doc._doc, html: md })
      return
    })
    .catch((err) => {
      if (err) next(err)
      res.status(NOT_FOUND.CODE).json(NOT_FOUND.JSON)
      return
    })
}

module.exports = { TechnologyByName }
