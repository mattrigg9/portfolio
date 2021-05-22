const author = 'mattrigg9';

const GITHUB_USER_PATH = `https://github.com/${author}`

const GITHUB_REPOS = [
  "portfolio",
  "knowmystatus-api",
  "cdk-stack-output-provider",
  "cdk-s3-distribution-template",
]

const plugins = [] // TODO: Replace with new plugin

// GITHUB_REPOS.map(repo => ({
//   resolve: "gatsby-source-github-repo",
//   options: {
//     repoUrl: `${GITHUB_USER_PATH}/${repo}`,
//   },
// }))

module.exports = {
  plugins,
  author
}
