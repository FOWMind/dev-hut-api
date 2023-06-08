const express = require('express')

const { LessonAdd, LessonById, LessonDelete, LessonEdit } = require('../controllers')

const router = express.Router()

router.get('/:id', LessonById)
router.post('/', LessonAdd)
router.delete('/:id', LessonDelete)
router.put('/:id', LessonEdit)

module.exports = router
