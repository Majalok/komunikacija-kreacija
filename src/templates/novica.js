import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Novica extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    /*     const { previous, next } = this.props.pageContext */
    return (
      <Layout title={siteTitle}>
        {/*  <SEO title={post.frontmatter.title} /> */}
        <article className="content-section">
          <header>
            <h5 className="news-item-title item-title">
              {post.frontmatter.title}
            </h5>

            <p className="news-content-section">{post.frontmatter.intro}</p>
          </header>

          <section
            className="news-content-section"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        {/*      <nav>
          <ul className="ul-news-link">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev" className="link-news">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next" className="link-news">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
      </Layout>
    )
  }
}

export default Novica

export const pageQuery1 = graphql`
  query BlogPostBySlug {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark {
      id
      html
      frontmatter {
        title
        intro
      }
    }
  }
`
