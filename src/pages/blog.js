import React, { Component } from "react"
import { Link } from "gatsby"
import { FaCalendarAlt } from "react-icons/fa"
import DropdownMenu from "../components/dropdown"
import Img from "gatsby-image"
import Layout from "../components/layout"

class Blog extends Component {
  constructor(props) {
    super(props);
    
  }
  render(){
    return(
      <Layout>
      <div className="blog">
        <div className="blog-content">
          BLOG
        </div>
      </div>
    </Layout>
    )
  }
 
}

export default Blog
