import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

class Svetovanje extends Component {
  constructor(props) {
    super(props)
  }

  
  render() {
    return (
      <Layout>
        <article>
          <section className="content-section">
            <h5 className="item-title news-item-title ">
              Title 0
            </h5>
            <br />
            <div className="gallery-content">
          
            </div>
            <br />
            <p className="item-title news-item-title ">
              Title 1
            </p>
            <br />
          </section>
        </article>
      </Layout>
    )
  }
}


export default Svetovanje
