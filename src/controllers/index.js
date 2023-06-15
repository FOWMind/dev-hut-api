const { TechnologyByName } = require('./TechnologyByName')
const { TechnologyAdd } = require('./TechnologyAdd')
const { TechnologyDelete } = require('./TechnologyDelete')
const { TechnologyEdit } = require('./TechnologyEdit')
const { Technologies } = require('./Technologies')

const { CourseById } = require('./CourseById')
const { CourseAdd } = require('./CourseAdd')
const { CourseEdit } = require('./CourseEdit')
const { CourseDelete } = require('./CourseDelete')
const { Courses } = require('./Courses')

const { LessonAdd } = require('./LessonAdd')
const { LessonById } = require('./LessonById')
const { LessonDelete } = require('./LessonDelete')
const { LessonEdit } = require('./LessonEdit')
const { Lessons } = require('./Lessons')

const { Collaborators } = require('./Collaborators')

module.exports = {
	TechnologyByName,
	TechnologyAdd,
	TechnologyDelete,
	TechnologyEdit,
	Technologies,
	CourseById,
	CourseAdd,
	CourseEdit,
	CourseDelete,
	Courses,
	LessonAdd,
	LessonById,
	LessonDelete,
	LessonEdit,
	Lessons,
	Collaborators,
}
