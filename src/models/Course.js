const { model, Schema } = require('mongoose')

const { lessonSchema } = require('./Lesson')

const courseSchema = new Schema({
  name: String,
  banner: String,
  lessons: [lessonSchema],
  categories: [String],
  createdAt: Date,
  editedAt: Date,
})

const Course = model('Course', courseSchema)

module.exports = { Course }
