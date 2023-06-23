const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, CONFLICT } } = require('../constants')
const { Lesson } = require('../models')
const { octokitConfig } = require('../config')
const Repository = require('../services/Repository')

const LessonByIdentifier = (req, res, next) => {
  let { identifier } = req.params
  
  if (!identifier) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  identifier = identifier.toLowerCase() 
  Lesson
    .findOne({ identifier })
    .populate('course')
    .exec()
    .then(async (lesson) => {
      const content = await Repository.getContent(octokitConfig.lessonsRepoOwner, octokitConfig.lessonsRepoName, `${lesson?.course?.identifier}/${lesson?.identifier}.md`)
      if (!content) return res.status(SUCCESS.CODE).json(lesson)
      return res.status(SUCCESS.CODE).json({ ...lesson._doc, content })
    })
    .catch(err => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error finding lesson' })
      return
    })
}

module.exports = { LessonByIdentifier }
