const { model, Schema } = require('mongoose')

const technologySchema = new Schema({
  name: {
    type: String,
    lowercase: true,
  },
  description: String,
  categories: [String],
  createdAt: Date,
  editedAt: Date,
})

const Technology = model('Technology', technologySchema)

module.exports = { Technology }
