const { model, Schema } = require('mongoose')

const lessonSchema = new Schema({
  name: String,
  description: String,
  contentFileName: String,
  identifier: String,
  courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
  createdAt: Date,
  editedAt: Date,
})

const Lesson = model('Lesson', lessonSchema)

module.exports = { lessonSchema, Lesson }
