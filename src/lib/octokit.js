const { Octokit } = require('octokit')
const { octokitConfig } = require('../config')

const octokit = new Octokit({
	auth: octokitConfig.authToken,
})

module.exports = { octokit }
