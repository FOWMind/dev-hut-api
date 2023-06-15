const octokitConfig = {
	authToken: process.env.OCTOKIT_API_TOKEN,
	repoOwner: process.env.OCTOKIT_API_REPO_OWNER,
	repoName: process.env.OCTOKIT_API_REPO_NAME,
}

module.exports = { octokitConfig }
