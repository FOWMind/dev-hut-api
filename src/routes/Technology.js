const express = require('express')
const markdown = require('../lib/markdown')

const { TechnologyByName, TechnologyAdd, TechnologyDelete } = require('../controllers')
const { Technology } = require('../models')

const router = express.Router()

router.get('/:name', TechnologyByName)
router.post('/', TechnologyAdd)
router.delete('/:id', TechnologyDelete)

module.exports = router
