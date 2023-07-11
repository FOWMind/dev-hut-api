const { TechnologyByName } = require('./TechnologyByName')
const { TechnologyAdd } = require('./TechnologyAdd')
const { TechnologyDelete } = require('./TechnologyDelete')
const { TechnologyEdit } = require('./TechnologyEdit')
const { Technologies } = require('./Technologies')
const { TechnologiesByArea } = require('./TechnologiesByArea')

const { CourseByIdentifier } = require('./CourseByIdentifier')
const { CourseById } = require('./CourseById')
const { CourseAdd } = require('./CourseAdd')
const { CourseEdit } = require('./CourseEdit')
const { CourseDelete } = require('./CourseDelete')
const { Courses } = require('./Courses')
const { CoursesByTechnology } = require('./CoursesByTechnology')

const { LessonAdd } = require('./LessonAdd')
const { LessonByIdentifier } = require('./LessonByIdentifier')
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
  TechnologiesByArea,
  CourseByIdentifier,
  CourseById,
  CourseAdd,
  CourseEdit,
  CourseDelete,
  Courses,
  CoursesByTechnology,
  LessonAdd,
  LessonByIdentifier,
  LessonById,
  LessonDelete,
  LessonEdit,
  Lessons,
  Collaborators,
}
