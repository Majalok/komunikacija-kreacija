import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

let bck1_xxl = "../assets/13-16.png"
let bck1_xl = "../assets/13-16.png"
let bck1_l = "../assets/13-16.png"
let bck1_md = "../assets/13-16-md.png"
let bck1_sm = "../assets/13-16-sm.png"

let isSmall, isMedium, isLarge, isXLarge, isXXLarge

const HeaderOl = ({ siteTitle, subtitle, description }) => {
  const userAreaRef = useRef()

  const changeUserBG = () => {
    let thisOne = userAreaRef
    console.log(thisOne)

    isSmall = window.innerWidth < 480
    isMedium = window.innerWidth > 481 && window.innerWidth <= 768
    isLarge = window.innerWidth > 769 && window.innerWidth <= 1499
    isXLarge = window.innerWidth > 1500 && window.innerWidth <= 2800
    isXXLarge = window.innerWidth > 2801 && window.innerWidth < 3500

    if (isXXLarge) {
      thisOne.current.style.backgroundImage = bck1_xxl
    }
    if (isXLarge) {
      thisOne.current.style.backgroundImage = bck1_xl
    }
    if (isLarge) {
      thisOne.current.style.backgroundImage = bck1_l
    }
    if (isMedium) {
      thisOne.current.style.backgroundImage = bck1_md
    }
    if (isSmall) {
      thisOne.current.style.backgroundImage = bck1_sm
    }
  }

  return (
    <header
      ref={userAreaRef}
      style={{
        /*  backgroundImage: `url(../assets/13-16.png)`, */
        /*  backgroundImage: `url(${this.state.backgroundImage1})`,
         */
        /*  backgroundSize: 'cover', */
        backgroundRepeat: "no-repeat",
        height: "100 %",
        backgroundPositionY: "-45px",
        backgroundSize: "116% 141%",
        /*     backgroundPositionY: '-130px' */
      }}
      className="header"
    >
      <div className="header-logo"></div>
      <div className="header-main-div">
        <span className="header-title">
          <h3>
            <Link
              to="/omeni"
              className="page-title-link"
              data-content="Komunikacija je kreacija"
            >
              {siteTitle}
            </Link>
          </h3>
          <p className="header-title-p">
            <i>{subtitle}</i>
          </p>
        </span>
        <div className="header-image-div">
          <img
            className="header-image"
            src="../assets/kom-logoTst3.png"
            alt=""
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
