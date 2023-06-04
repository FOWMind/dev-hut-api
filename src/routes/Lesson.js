const express = require('express')

const { LessonAdd, LessonById } = require('../controllers')

const router = express.Router()

router.get('/:id', LessonById)
router.post('/', LessonAdd)

module.exports = router
