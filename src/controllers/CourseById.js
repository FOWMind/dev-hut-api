const { validObjectId } = require('../utils')
const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, NOT_FOUND, CONFLICT } } = require('../constants')
const { Course } = require('../models')

const CourseById = (req, res, next) => {
  const { id } = req.params

  if (!id || !validObjectId(id)) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  Course.findById(id)
    .then(doc => {
      if (!doc) {
        res.status(NOT_FOUND.CODE).json(NOT_FOUND.JSON)
        return
      }

      res.status(SUCCESS.CODE).json(doc)
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error finding course' })
    })
}

module.exports = { CourseById }
