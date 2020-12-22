import React, { Component } from "react"
/* import { graphql } from "gatsby" */
import Layout from "../components/layout"
/* import Blog from "./blog" */
/* function initNetlifyIdentity() {
  console.log("initNetlifyIdentity called")
  const script = document.createElement("script")

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true
  document.body.appendChild(script)
} */

/* function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity

  if (netlifyIdentity) {
    netlifyIdentity.open()
  } else {
    console.log("netlify identity not defined")
  }s
}

class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity()
  }
  render() {
    return <div></div>
  }
} */
class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <h5 className="item-title">test</h5>
      </Layout>
    )
  }
}

export default IndexPage
