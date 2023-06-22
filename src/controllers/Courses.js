const { HTTP_RESPONSES: { SUCCESS, CONFLICT } } = require('../constants')
const { Course } = require('../models')

const Courses = (req, res, next) => {
  Course
    .find()
    .populate('lessons')
    .exec()
      .then(courses => {
        res.status(SUCCESS.CODE).json(courses)
        return
      })
      .catch(err => {
        if (err) next(err)
        res.status(CONFLICT.CODE).json({ message: 'error while trying to get courses' })
        return
      }) 
}

module.exports = { Courses }
