import React from "react"
import classNames from "classnames"
import layoutStyles from "../homeLayout.module.scss"
import { author as gitHubAuthor } from "config/github"

const GITHUB_AUTHOR = 'mattrigg9';

const RepoInfo = ({ name, description }) => {
  const url = `https://github.com/${GITHUB_AUTHOR}/${name}`
  return (
    <>
      <h5 className="no-link-style">
        <a href={url} className="no-link-style hover-fade">
          <span className="font-weight-light">{gitHubAuthor}/</span>
          {name}
        </a>
      </h5>
      <p className="font-size-small">{description}</p>
    </>
  )
}

// TEMPORARY FIX: https://github.com/dakebl/gatsby-source-github-repo/issues/6
const repos = [
  {
    name: 'knowmystatus-api',
    description: 'Lambda+APIGW backend for KnowMyStatus, utilizing a geospatially indexed DynamoDB table.'
  },
  {
    name: 'cdk-stack-output-provider',
    description: 'An AWS CDK Construct that can access CloudFormation stack outputs in other regions.',
  },
  {
    name: 'cdk-s3-distribution-template',
    description: 'A CDK template for hosting a static website on S3 using scalable and distributed architecture.'
  },
  {
    name: 'portfolio',
    description: 'This portfolio! Built with GatsbyJS'
  }
]

const GitHubRepos = () => {
  // const queryResult = useStaticQuery(graphql`
  //   {
  //     allGitHubRepoData {
  //       edges {
  //         node {
  //           description
  //           name
  //           url
  //           id
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <h1 className={classNames(layoutStyles.sectionTitle)}>GitHub</h1>
      <p>See what I've been working on lately.</p>
      <ul className="no-list-style">
        {repos.map(repo => (
          <li
            key={repo.name}
            className={classNames(layoutStyles.module, "py-2 my-5")}
          >
            <RepoInfo {...repo} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default GitHubRepos
