const { model, Schema } = require('mongoose')

const courseSchema = new Schema({
  name: String,
  description: String,
  banner: { img: String, },
  lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
  categories: [String],
  technologies: [String],
  identifier: String,
  createdAt: Date,
  editedAt: Date,
})

const Course = model('Course', courseSchema)

module.exports = { Course }
