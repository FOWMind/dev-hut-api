const { HTTP_RESPONSES: { SUCCESS, NOT_FOUND } } = require('../constants')
const { Course } = require('../models')

const Courses = (req, res, next) => {
  Course.find({})
    .then(courses => {
      res.status(SUCCESS.CODE).json(courses)
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(NOT_FOUND.CODE).json(NOT_FOUND.JSON)
      return
    }) 
}

module.exports = { Courses }
