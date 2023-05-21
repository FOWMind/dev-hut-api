const path = require('path')
const fs = require('fs')
const mdParser = require('markdown-it')()

const baseDir = path.dirname(require.main.filename)

const markdown = {
	parse: parseMarkdown,
}

function readMarkdown(fileName) {
	const filePath = path.join(baseDir, `./src/data/${fileName}.md`)
	console.log(filePath)

	try {
		return fs.readFileSync(filePath, 'utf-8')
	} catch (err) {
		return null
	}
}

function parseMarkdown(fileName) {
	const md = readMarkdown(fileName)

	if (md) {
		return mdParser.render(md)
	}
}

module.exports = markdown
