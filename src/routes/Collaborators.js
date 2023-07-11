const router = require('express').Router()

const { Collaborators } = require('../controllers')

router.get('/', Collaborators)

module.exports = router
