const express = require('express')

const { LessonAdd } = require('../controllers')

const router = express.Router()

router.post('/', LessonAdd)

module.exports = router
