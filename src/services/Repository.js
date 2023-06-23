const { octokit } = require('../lib/octokit')

const Repository = {
  getContent: async (repoOwner, repoName, path) => {
    try {
      const { data } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: repoOwner,
        repo: repoName,
        path,
      })

      const content = Buffer.from(data.content, data.encoding).toString('utf8')
      return content
    } catch (err) {
      console.warn(`[STATUS ${err.response.status}] attempted to get ${err.response.url}`)
      return
    }
  }
}

module.exports = Repository
