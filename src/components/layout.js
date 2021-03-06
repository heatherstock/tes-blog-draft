import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        <Link to={`/`}
        css={css`
          float: right;
        `}
      >
        {data.site.siteMetadata.title}
      </Link>
      </h3>
      <Link
        to={`/profiles/`}
        css={css`
          float: right;
        `}
      >
        Meet the Team
      </Link>
      <br></br>
      <Link to={`/`}
        css={css`
          float: right;
        `}
      >
        Blog
      </Link>
      {children}
    </div>
  )
  }