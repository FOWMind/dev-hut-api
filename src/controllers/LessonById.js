const { validObjectId } = require('../utils')
const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, NOT_FOUND, CONFLICT } } = require('../constants')
const { Lesson } = require('../models')

const LessonById = (req, res, next) => {
  const { id } = req.params
  
  if (!id || !validObjectId(id)) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  Lesson
    .findById(id)
    .populate('course')
    .exec()
    .then(lesson => {
      if (!lesson) {
        res.status(NOT_FOUND.CODE).json(NOT_FOUND.JSON)
        return
      }

      res.status(SUCCESS.CODE).json(lesson)
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error finding lesson' })
      return
    })
}

module.exports = { LessonById }
