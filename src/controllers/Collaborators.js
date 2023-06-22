const {
	HTTP_RESPONSES: { SUCCESS, CONFLICT },
} = require('../constants')
const { octokitConfig } = require('../config')
const { octokit } = require('../lib/octokit')

const Collaborators = async (req, res, next) => {
	try {
		const { data: collaborators } = await octokit.request('GET /repos/{owner}/{repo}/collaborators', {
			owner: octokitConfig.repoOwner,
			repo: octokitConfig.repoName,
		})

		res.status(SUCCESS.CODE).json(collaborators)
	} catch (err) {
		if (err) next(err)
		res.status(CONFLICT.CODE).json({ message: 'error while trying to get repository collaborators' })
	}
}

module.exports = { Collaborators }
