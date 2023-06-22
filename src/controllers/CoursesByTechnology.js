const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, CONFLICT } } = require('../constants')
const { Course } = require('../models')

const CoursesByTechnology = (req, res, next) => {
  let { technology } = req.params

  if (!technology) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }
  
  technology = technology.toLowerCase()
  Course
    .find({ technologies: technology })
    .populate('lessons')
    .exec()
    .then((courses) => {
      res.status(SUCCESS.CODE).json(courses)
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error while trying to get courses' })
      return
    })
}

module.exports = { CoursesByTechnology }
