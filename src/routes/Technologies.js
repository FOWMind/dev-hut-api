const express = require('express')

const { Technologies } = require('../controllers')

const router = express.Router()

router.get('/', Technologies)

module.exports = router
