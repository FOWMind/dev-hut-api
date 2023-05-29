const express = require('express')

const { CourseAdd, CourseDelete } = require('../controllers')

const router = express.Router()

router.post('/', CourseAdd)
router.delete('/:id', CourseDelete)

module.exports = router
