import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          {data.site.siteMetadata.title}
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "profile"}}}, sort: {fields: frontmatter___title}) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              type
            }
            excerpt
          }
        }
      }
    site {
      siteMetadata {
        title
      }
    }
  }
`
