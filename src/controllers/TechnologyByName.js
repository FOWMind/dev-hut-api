const markdown = require('../lib/markdown')
const { Technology } = require('../models')

const TechnologyByName = (req, res, next) => {
	let { name } = req.params

  if (!name) {
    res.status(400).json({ message: 'bad request' })
    return
  }

  name = name.toLowerCase()
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
      if (err) next(err)
      res.status(404).json({ message: 'not found' })
      return
    })
}

module.exports = { TechnologyByName }
