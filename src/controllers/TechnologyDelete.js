const mongoose = require('mongoose')

const { validObjectId } = require('../utils')
const { Technology } = require('../models')
const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, NOT_FOUND, CONFLICT } } = require('../constants')

const TechnologyDelete = (req, res, next) => {
  const { id } = req.params

  if (!id || !validObjectId(id)) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  Technology.findOneAndDelete({ _id: id })
    .then(doc => {
      if (!doc) {
        res.status(NOT_FOUND.CODE).json(NOT_FOUND.JSON)
        return
      }

      res.status(SUCCESS.CODE).json({ message: 'technology deleted successfully' })
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error while deleting technology' })
      return
    })
}

module.exports = { TechnologyDelete }
