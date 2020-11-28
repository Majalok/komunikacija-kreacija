import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, subtitle, description }) => (
  <header style={{
    backgroundImage: `url(../assets/13-1.jpg)`,
    /*  backgroundSize: 'cover', */
    backgroundRepeat: 'no-repeat',
    height: '100 %',
    backgroundPositionY: '-45px',
    backgroundSize: '116% 141%'
    /*     backgroundPositionY: '-130px' */
  }} className="header" >
    {/* <div className="box-container-1" style={{
      backgroundImage: `url(../assets/wave4.png)`,
      backgroundSize: 'contain',
      backgroundRepeat: 'repeat-x',
      height: '70px'
    }}></div> */}
    < div className="header-logo" >
      {/* <img className="header-logo-img" src="../icons/icon-96x96.png" alt="" />
       */}{" "}
    </div >
    <div className="header-main-div">
      <span className="header-title">
        <h3>
          <Link to="/omeni" className="page-title-link">
            {siteTitle}
          </Link>
        </h3>
        <p className="header-title-p">
          <i>{subtitle}</i>
        </p>
      </span>
      <div className="header-image-div">
        <img className="header-image" src="../icons/kom-kr-logo-1.png" alt="" />
      </div>
    </div>
    {/*  <div className="header-main-div">
      <div className="header-image-div">
        <img className="header-image-test" src="../assets/h1.png" alt="" />
      </div>
    </div> */}
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
