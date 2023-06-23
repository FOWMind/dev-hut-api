const { validObjectId } = require('../utils')
const { HTTP_RESPONSES: { CREATED, BAD_REQUEST, CONFLICT } } = require('../constants')
const { Lesson, Course } = require('../models')

const LessonAdd = async (req, res, next) => {
  const { name, description, identifier, courseId } = req.body

  if (
    Object.entries(req.body) === 0 ||
    !req.body ||
    !name ||
    !description ||
    !identifier ||
    !courseId ||
    !validObjectId(courseId)
  ) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  const lessonCount = await Lesson.countDocuments({ identifier }, { limit: 1 })
  if (lessonCount > 0) {
    res.status(CONFLICT.CODE).json({ message: 'a lesson with that identifier already exist' })
    return
  }

  const relatedCourse = await Course.findById(courseId)
  if (!relatedCourse) {
    res.status(BAD_REQUEST.CODE).json({ message: 'cannot find course with that id' })
    return
  }

  const newLesson = {
    name,
    description,
    identifier,
    courseId: relatedCourse._id,
    createdAt: new Date(),
  }

  Lesson.create(newLesson)
    .then(async createdLesson => {
      relatedCourse.lessons.push(createdLesson._id)
      await relatedCourse.save()

      console.log('Lesson created at ', newLesson.createdAt)
      res.status(CREATED.CODE).json({ message: 'lesson created successfully', data: createdLesson })
      return
    })
    .catch((err) => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error trying to create lesson' })
      return
    })
}

module.exports = { LessonAdd }
