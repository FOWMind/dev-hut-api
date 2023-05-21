const express = require('express')
const markdown = require('../lib/markdown')

const router = express.Router()

router.get('/:name', (req, res, next) => {
	const { name } = req.params
	const md = markdown.parse(name)
	res.status(200).send({ html: md })
})

module.exports = router
