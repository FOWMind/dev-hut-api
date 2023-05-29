const express = require('express')

const { CourseById, CourseAdd, CourseDelete } = require('../controllers')

const router = express.Router()

router.get('/:id', CourseById)
router.post('/', CourseAdd)
router.delete('/:id', CourseDelete)

module.exports = router
