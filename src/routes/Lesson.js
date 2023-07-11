const express = require('express')

const { LessonAdd, LessonById, LessonByIdentifier, LessonDelete, LessonEdit } = require('../controllers')

const router = express.Router()

router.get('/id/:id', LessonById)
router.get('/:identifier', LessonByIdentifier)
router.post('/', LessonAdd)
router.delete('/:id', LessonDelete)
router.put('/:id', LessonEdit)

module.exports = router
