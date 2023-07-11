const { model, Schema } = require('mongoose')

const technologySchema = new Schema({
  name: String,
  description: String,
  categories: [String],
  areas: [String],
  images: {
    banner: String,
    icon: String,
  },
  identifier: String,
  createdAt: Date,
  editedAt: Date,
})

const Technology = model('Technology', technologySchema)

module.exports = { Technology }
