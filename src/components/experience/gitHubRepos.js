import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import classNames from "classnames"
import layoutStyles from "../layout.module.scss"
import { author as gitHubAuthor } from "config/github"

// TODO: Implement less flaky method to determine null value
// https://github.com/dakebl/gatsby-source-github-repo/blob/425803a182d029a3f933f57fda33cd20608215ba/src/gatsby-node.js#L26
const NULL_WEBSITE_VALUE = "Repo does not have a website."

const RepoInfo = ({ name, url, website, description }) => {
  return (
    <div>
      <h3>
        <a href={url} className="no-link-style">
          <span className="font-weight-light">{gitHubAuthor}/</span>
          {name}
        </a>
      </h3>
      {website !== NULL_WEBSITE_VALUE && <a href={website}>Website</a>}
      <p>{description}</p>
    </div>
  )
}

const GitHubRepos = () => {
  const queryResult = useStaticQuery(graphql`
    {
      allGitHubRepoData {
        edges {
          node {
            description
            name
            url
            website
            id
          }
        }
      }
    }
  `)

  return (
    <>
      <h1 className={classNames(layoutStyles.sectionTitle)}>GitHub</h1>
      <p>See what I've been working on lately.</p>
      <ul className="no-list-style">
        {queryResult.allGitHubRepoData.edges.map(({ node }) => (
          <li key={node.id} className={classNames(layoutStyles.module, "mb-6")}>
            <RepoInfo {...node} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default GitHubRepos
