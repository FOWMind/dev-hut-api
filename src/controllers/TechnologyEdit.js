const { validObjectId } = require('../utils')
const { Technology } = require('../models')
const { HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, CONFLICT } } = require('../constants')

const TechnologyEdit = (req, res, next) => {
  const { id } = req.params
  const update = req.body

  if (
    !id ||
    !validObjectId(id) ||
    !req.body ||
    Object.entries(update).length === 0
  ) {
    res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
    return
  }

  Technology.findOneAndUpdate({ _id: id }, update, { new: true })
    .then((doc) => {
      res.status(SUCCESS.CODE).json({ message: 'technology edited successfully', data: doc })
      return
    })
    .catch(err => {
      if (err) next(err)
      res.status(CONFLICT.CODE).json({ message: 'error while editing technology' })
      return
    })
}

module.exports = { TechnologyEdit }
