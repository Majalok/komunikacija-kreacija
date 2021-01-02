import React, { Component } from "react"
import Modal from "react-modal"

import closeIcon from "../assets/icons/close.png"

class MessageSuccess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: true,
    }
    this.openConfirmSuccess = this.openConfirmSuccess.bind(this)
    this.closeConfirmSuccess = this.closeConfirmSuccess.bind(this)
  }

  closeConfirmSuccess() {
    this.props.closeParent()
    this.setState({ modalIsOpen: false })
  }

  openConfirmSuccess() {
    this.setState({ modalIsOpen: true })
  }

  render() {
    return (
      <Modal
        className="modal-order-confirm"
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeConfirmSuccess}
        contentLabel=""
        ariaHideApp={false}
      >
        <h3>Vaše sporočilo je bilo uspešno poslano! </h3>
        <div
          className="confirm-order-btn btn-modal order"
          onClick={this.closeConfirmSuccess}
        >
          <div className="product-presentation-icon">
            <img
              className="close-icon confirm"
              src={closeIcon}
              onClick={this.closeConfirmSuccess}
              title="Zapri"
              alt=""
            />
          </div>
          <span className="modal-close-txt">Zapri</span>
        </div>
      </Modal>
    )
  }
}

export default MessageSuccess
