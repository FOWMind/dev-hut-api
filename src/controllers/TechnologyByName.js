const markdown = require('../lib/markdown')
const { Technology } = require('../models')

const TechnologyByName = (req, res, next) => {
	const name = req.params.name.toLowerCase()

  if (!name) {
    res.status(400).json({ message: 'bad request' })
    return
  }

  Technology.findOne({ name })
    .then((doc) => {
      if (!doc) {
        res.status(404).json({ message: 'not found' })
        return
      }
      const md = markdown.parse(name)
      res.status(200).json({ ...doc._doc, html: md })
      return
    })
    .catch((err) => {
      // next(err)
      console.error(err)
      res.status(404).json({ message: 'not found' })
      return
    })
}

module.exports = { TechnologyByName }
