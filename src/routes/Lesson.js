const express = require('express')

const { LessonAdd, LessonById, LessonDelete } = require('../controllers')

const router = express.Router()

router.get('/:id', LessonById)
router.post('/', LessonAdd)
router.delete('/:id', LessonDelete)

module.exports = router
