const path = require('path')
const fs = require('fs')
const mdParser = require('markdown-it')()

const markdown = {
	parse: parseMarkdown,
}

function readMarkdown(fileName) {
	const filePath = path.join(process.cwd(), `/src/data/${fileName}.md`)

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
