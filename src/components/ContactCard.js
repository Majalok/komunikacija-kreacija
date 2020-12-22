import React, { Component } from "react"

class ContactCard extends Component {
  render() {
    return (
      <div
        className="contact-description" /* style={{
    backgroundImage: `url(../assets/paper3.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100 %',
    backgroundPositionY: '-50px'
}} */
      >
        <img className="contact-img" src="../icons/kom-kr-logo-2.png" alt="" />
        <div className="contact-div">
          <div>
            <div className="contact-text name">Nataša Muc</div>
            <div className="contact-text email">
              info@komunikacija-kreacija.si
            </div>
          </div>
          <div className="contact-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../icons/fb-sm.png" width="30px" alt="" />
            </a>
            <a
              href="https://www.instagram.com/natasamuc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../icons/Instagram_50x.png" width="30px" alt="" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactCard
