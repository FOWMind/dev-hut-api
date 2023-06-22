const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, CONFLICT } } = require('../constants')
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
        res.status(SUCCESS.CODE).json(course)
        return
      })
      .catch(err => {
        if (err) next(err)
        res.status(CONFLICT.CODE).json({ message: 'error while trying to get the course' })
      })
}

module.exports = { CourseByIdentifier }
