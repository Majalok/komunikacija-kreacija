import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

class News extends Component {
  constructor(props) {
    super(props)

    let blogList = this.props.data.blogList

    this.state = {
      currentNews: blogList.edges, //this.props.blog,
    }
  }

  render() {
    if (typeof this.state.currentNews == "undefined") return <div>No data</div>
    return (
      <Layout>
        <div className="blog">
          <div className="blog-content">
            <div className="blog-item">
              {this.state.currentNews.map(({ node }) => {
                return (
                  <>
                    <br />
                    <br />
                    <div className="blog-title pisava-special brown">
                      {node.frontmatter.title}
                    </div>
                    <div
                      className="blog-text pisava-special brown"
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.intro,
                      }}
                    >
                      {/*  {node.frontmatter.intro}
                       */}
                    </div>
                  </>
                )
              })}
            </div>
            <br />
          </div>
        </div>
      </Layout>
    )
  }
}

export default News

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    blogList: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            intro
          }
        }
      }
    }
  }
`
