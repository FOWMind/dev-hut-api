const { model, Schema } = require('mongoose')

const lessonSchema = new Schema({
  name: String,
  description: String,
  content: String,
  createdAt: Date,
  editedAt: Date,
})

const Lesson = model('Lesson', lessonSchema)

module.exports = { lessonSchema, Lesson }
