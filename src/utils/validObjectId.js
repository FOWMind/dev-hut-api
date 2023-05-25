const ObjectId = require('mongoose').Types.ObjectId

const validObjectId = (id) => ObjectId.isValid(id)

module.exports = { validObjectId }
