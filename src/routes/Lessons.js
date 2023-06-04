const express = require('express')

const { Lessons } = require('../controllers')

const router = express.Router()

router.get('/', Lessons)

module.exports = router
