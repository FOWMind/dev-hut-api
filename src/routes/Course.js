const express = require('express')

const { CourseByIdentifier, CourseById, CourseAdd, CourseEdit, CourseDelete } = require('../controllers')

const router = express.Router()

router.get('/:identifier', CourseByIdentifier)
router.get('/:id', CourseById)
router.post('/', CourseAdd)
router.put('/:id', CourseEdit)
router.delete('/:id', CourseDelete)

module.exports = router
