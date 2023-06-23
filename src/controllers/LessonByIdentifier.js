const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, CONFLICT } } = require('../constants')
const { Lesson } = require('../models')
const { octokit } = require('../lib/octokit')
const { octokitConfig } = require('../config')

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
      try {
        const { data } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
          owner: octokitConfig.lessonsRepoName,
          repo: octokitConfig.lessonsRepoName,
          path: `${lesson.course.identifier}/${identifier}.md`,
        })

        const content = Buffer.from(data.content, data.encoding).toString('utf8')
        return res.status(SUCCESS.CODE).json({ ...lesson._doc, content })
      } catch (err) {
        return res.status(SUCCESS.CODE).json(lesson)
      }
    })
    .catch(err => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error finding lesson' })
      return
    })
}

module.exports = { LessonByIdentifier }
