import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import classNames from "classnames"
import layoutStyles from "../homeLayout.module.scss"
import { author as gitHubAuthor } from "config/github"

const RepoInfo = ({ name, url, description }) => {
  return (
    <>
      <h5 class="no-link-style">
        <a href={url} className="no-link-style hover-fade">
          <span className="font-weight-light">{gitHubAuthor}/</span>
          {name}
        </a>
      </h5>
      <p className="font-size-small">{description}</p>
    </>
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
          <li
            key={node.id}
            className={classNames(layoutStyles.module, "py-2 my-5")}
          >
            <RepoInfo {...node} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default GitHubRepos
