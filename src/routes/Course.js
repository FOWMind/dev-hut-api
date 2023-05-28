const express = require('express')

const { CourseAdd } = require('../controllers')

const router = express.Router()

router.post('/', CourseAdd)

module.exports = router
