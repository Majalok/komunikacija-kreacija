import React, { Component } from "react"
import { Link } from "gatsby"

/* import { FaCalendarAlt } from "react-icons/fa" */
import Layout from "../components/layout"

class Blog1 extends React.Component {

  constructor() {
    super()

    /*     this.state = {
          showBlog: false,
          idBlog: ''
        } */
    this.test1 = this.test1.bind(this);

  }

  test1() {
    /*    this.setState({
         showBlog: !this.state.show,
         idBlog: true,
       }) */
    alert(1)
    console.log("test", 1)

  }
  /*   openBlog = (e, blogItemId) => {
      let val = parseFloat(e.currentTarget.value)
      console.log("this.blogItemId:: ", val, blogItemId)
      this.setState({ showBlog: true, idBlog: true })
    };
   */
  render() {
    return (
      <Layout>
        {/*  <div style={{ cursor: 'pointer', color: 'green' }} onClick={this.test1}>
          <span className="menu-title">12Ženska</span>
        </div> */}
      </Layout >
    )
  }
}

export default Blog1
