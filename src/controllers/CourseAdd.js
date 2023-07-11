const { HTTP_RESPONSES: { CREATED, BAD_REQUEST, CONFLICT } } = require('../constants')
const { Course } = require('../models')

const CourseAdd = async (req, res, next) => {
  const { name, description, banner, lessons, categories, technologies, identifier } = req.body

  if (
    Object.entries(req.body).length === 0 ||
    !req.body ||
    !name ||
    !description ||
    !banner?.img ||
    !categories ||
    !technologies ||
    !identifier
  ) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  const courseCount = await Course.countDocuments({ identifier }, { limit: 1 })
  if (courseCount > 0) {
    res.status(CONFLICT.CODE).json({ message: 'a course with that identifier already exist' })
    return
  }

  const newCourse = {
    name,
    description,
    banner,
    lessons: lessons || [],
    categories,
    technologies,
    identifier,
    createdAt: new Date(),
  }

  Course.create(newCourse)
    .then(doc => {
      console.log('Course added at ', newCourse.createdAt)
      res.status(CREATED.CODE).json({ message: 'course added', data: doc })
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error while adding course' })
      return
    })
}

module.exports = { CourseAdd }
