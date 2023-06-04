const { HTTP_RESPONSES: { CREATED, BAD_REQUEST, CONFLICT } } = require('../constants')
const { Lesson } = require('../models')

const LessonAdd = async (req, res, next) => {
  const { name, description, contentFileName, identifier, courseId } = req.body

  if (
    Object.entries(req.body) === 0 ||
    !req.body ||
    !name ||
    !description ||
    !contentFileName ||
    !identifier ||
    !courseId
  ) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  const lessonCount = await Lesson.countDocuments({ identifier }, { limit: 1 })
  if (lessonCount > 0) {
    res.status(CONFLICT.CODE).json({ message: 'a lesson with that identifier already exist' })
    return
  }

  const newLesson = {
    name,
    description,
    contentFileName,
    identifier,
    courseId,
    createdAt: new Date(),
  }

  Lesson.create(newLesson)
    .then(createdLesson => {
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
