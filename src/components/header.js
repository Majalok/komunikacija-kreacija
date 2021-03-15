import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, subtitle, description }) => (
  <header
    style={{
      backgroundImage: `url(../assets/13-16.png)`,
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
        <img className="header-image" src="../assets/kom-logoTst3.png" alt="" />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
