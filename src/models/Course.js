const { model, Schema } = require('mongoose')

const { lessonSchema } = require('./Lesson')

const courseSchema = new Schema({
  name: String,
  description: String,
  banner: { img: String, },
  lessons: [lessonSchema],
  categories: [String],
  identifier: String,
  createdAt: Date,
  editedAt: Date,
})

const Course = model('Course', courseSchema)

module.exports = { Course }
