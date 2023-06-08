const {
	HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, NOT_FOUND, CONFLICT },
} = require('../constants')
const { validObjectId } = require('../utils')
const { Lesson } = require('../models')

const LessonEdit = (req, res, next) => {
	const { id } = req.params
	const update = req.body

	if (
		Object.entries(update).length === 0 ||
		!update ||
		!id ||
		!validObjectId(id)
	) {
		res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
		return
	}

	const updatedLesson = { ...update, editedAt: new Date() }
	Lesson.findByIdAndUpdate(id, updatedLesson, { new: true })
		.then((editedLesson) => {
			if (!editedLesson) {
				res.status(NOT_FOUND.CODE).json(NOT_FOUND.JSON)
				return
			}

			res
				.status(SUCCESS.CODE)
				.json({ message: 'lesson edited successfully', data: editedLesson })
			return
		})
		.catch((err) => {
			if (err) next(err)
			res.status(CONFLICT.CODE).json({ message: 'error while editing lesson' })
			return
		})
}

module.exports = { LessonEdit }
