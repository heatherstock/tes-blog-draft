import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              <Link
              to={node.frontmatter.path}
              css={css`
              margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
            </Link>
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
              path
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
