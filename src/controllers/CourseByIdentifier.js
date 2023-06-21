const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, NOT_FOUND, CONFLICT } } = require('../constants')
const { Course } = require('../models')

const CourseByIdentifier = (req, res, next) => {
  let { identifier } = req.params
  if (!identifier) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  identifier = identifier.toLowerCase()
  Course
    .findOne({ identifier })
    .populate('lessons')
    .exec()
      .then(course => {
        if (!course) {
          res.status(NOT_FOUND.CODE).json(NOT_FOUND.JSON)
          return
        }
        res.status(SUCCESS.CODE).json(course)
        return
      })
      .catch(err => {
        if (err) next(err)
        res.status(CONFLICT.CODE).json({ message: 'error finding course' })
      })
}

module.exports = { CourseByIdentifier }
