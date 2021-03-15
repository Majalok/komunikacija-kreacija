import React, { Component } from "react"

import Layout from "../components/layout"
/* import { FaFacebook, FaYoutube, FaMailBulk } from "react-icons/fa" */
import ContactForm from "../components/ContactForm"
import ContactCard from "../components/ContactCard"
//import MessageSuccess from "../components/MessageSuccess"

class Kontakt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      showLoader: false,
      sendError: "",
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    // this.showLoader = this.showLoader(this)
    this.childOrderSuccess = React.createRef()
  }

  openConfirmSuccess = () => {
    this.setState({ sendError: "" })
    this.childOrderSuccess.current.openConfirmSuccess()
    this.setState({ showLoader: false })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  render() {
    return (
      <Layout>
        <div className="kontakt-content">
          <div className="o-meni-quote quote-contact">
            <p className="quote-text">
              Naj <strong>strah</strong> ne bo naša <strong>ovira</strong>. Naj
              nas ne hromi. Ko se soočimo z njim in ga presežemo, postanemo
              zmagovalci.
            </p>
          </div>
          <div className="contact-form-div">
            <ContactForm />
            <ContactCard orderSendResult={this.orderResult} />
            {/* <MessageSuccess
              ref={this.childOrderSuccess}
              closeParent={this.closeModal}
            /> */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Kontakt
