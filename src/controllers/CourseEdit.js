const { validObjectId } = require('../utils')
const {
	HTTP_RESPONSES: { SUCCESS, BAD_REQUEST, NOT_FOUND, CONFLICT },
} = require('../constants')
const { Course } = require('../models')

const CourseEdit = (req, res, next) => {
	const { id } = req.params
	const update = req.body

	if (
		!id ||
		!validObjectId(id) ||
		!update ||
		Object.entries(update).length === 0
	) {
		res.status(BAD_REQUEST.CODE).json(BAD_REQUEST.JSON)
		return
	}

	const newCourseContent = { ...update, editedAt: new Date() }
	Course.findByIdAndUpdate(id, newCourseContent, { new: true })
		.then((editedCourse) => {
			if (!editedCourse) {
				res.status(NOT_FOUND.CODE).json(NOT_FOUND.JSON)
				return
			}
			res
				.status(SUCCESS.CODE)
				.json({ message: 'course edited successfully', data: editedCourse })
			return
		})
		.catch((err) => {
			if (err) next(err)
			res.status(CONFLICT.CODE).json({ message: 'error while editing course' })
			return
		})
}

module.exports = { CourseEdit }
