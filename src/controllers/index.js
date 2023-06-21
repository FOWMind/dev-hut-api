const { TechnologyByName } = require('./TechnologyByName')
const { TechnologyAdd } = require('./TechnologyAdd')
const { TechnologyDelete } = require('./TechnologyDelete')
const { TechnologyEdit } = require('./TechnologyEdit')
const { Technologies } = require('./Technologies')

const { CourseByIdentifier } = require('./CourseByIdentifier')
const { CourseById } = require('./CourseById')
const { CourseAdd } = require('./CourseAdd')
const { CourseEdit } = require('./CourseEdit')
const { CourseDelete } = require('./CourseDelete')
const { Courses } = require('./Courses')
const { CoursesByTechnology } = require('./CoursesByTechnology')

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
  CourseByIdentifier,
  CourseById,
	CourseAdd,
	CourseEdit,
	CourseDelete,
	Courses,
  CoursesByTechnology,
	LessonAdd,
	LessonById,
	LessonDelete,
	LessonEdit,
	Lessons,
	Collaborators,
}
