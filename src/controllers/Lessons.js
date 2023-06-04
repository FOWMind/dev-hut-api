const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST } } = require('../constants')
const { Lesson } = require('../models')

const Lessons = (req, res, next) => {
  Lesson.find()
    .then(lessons => {
      res.status(SUCCESS.CODE).json(lessons)
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(NOT_FOUND.CODE).json(NOT_FOUND.JSON)
    })
}

module.exports = { Lessons }
