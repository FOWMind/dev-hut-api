const express = require('express')

const { Courses, CoursesByTechnology } = require('../controllers')

const router = express.Router()

router.get('/', Courses)
router.get('/:technology', CoursesByTechnology)

module.exports = router
