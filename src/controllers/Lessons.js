const { HTTP_RESPONSES: { SUCCESS, CONFLICT } } = require('../constants')
const { Lesson } = require('../models')

const Lessons = (req, res, next) => {
  Lesson.find()
    .then(lessons => {
      res.status(SUCCESS.CODE).json(lessons)
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error while trying to get lessons' })
    })
}

module.exports = { Lessons }
