const { markdown } = require('../lib/markdown')

const TechnologyByName = (req, res, next) => {
	const { name } = req.params
	const md = markdown.parse(name)
	res.status(200).send({ html: md })
}

module.exports = { TechnologyByName }
