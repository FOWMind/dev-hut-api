const express = require('express')

const { Technologies, TechnologiesByArea } = require('../controllers')

const router = express.Router()

router.get('/', Technologies)
router.get('/area/:area', TechnologiesByArea)

module.exports = router
