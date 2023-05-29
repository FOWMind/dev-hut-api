const express = require('express')

const { Courses } = require('../controllers')

const router = express.Router()

router.get('/', Courses)

module.exports = router
