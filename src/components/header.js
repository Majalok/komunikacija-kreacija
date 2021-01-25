import { Link } from "gatsby"
import React from "react"

let bck1_xxl = "../assets/13-16.png"
let bck1_xl = "../assets/13-16.png"
let bck1_l = "../assets/13-16.png"
let bck1_md = "../assets/13-16-md.png"
let bck1_sm = "../assets/13-16-sm.png"

let bck1_xxl_webp = "../assets/webp/13-16.webp"
let bck1_xl_webp = "../assets/webp/13-16.webp"
let bck1_l_webp = "../assets/webp/13-16.webp"
let bck1_md_webp = "../assets/webp/13-16-md.webp"
let bck1_sm_webp = "../assets/webp/13-16-sm.webp"
let isSmall, isMedium, isLarge, isXLarge, isXXLarge

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = { ...props }
  }
  componentDidMount() {
    window.scrollTo(0, 0)

    isSmall = window.innerWidth < 480
    isMedium = window.innerWidth > 481 && window.innerWidth <= 768
    isLarge = window.innerWidth > 769 && window.innerWidth <= 1499
    isXLarge = window.innerWidth > 1500 && window.innerWidth <= 2800
    isXXLarge = window.innerWidth > 2801 && window.innerWidth < 3500

    if (isXXLarge) {
      this.setState({ backgroundImage1: bck1_xxl })
      this.setState({ backgroundImageWebp: bck1_xxl_webp })
    }
    if (isXLarge) {
      this.setState({ backgroundImage1: bck1_xl })
      this.setState({ backgroundImageWebp: bck1_xl_webp })
    }
    if (isLarge) {
      this.setState({ backgroundImage1: bck1_l })
      this.setState({ backgroundImageWebp: bck1_l_webp })
    }
    if (isMedium) {
      this.setState({ backgroundImage1: bck1_md })
      this.setState({ backgroundImageWebp: bck1_md_webp })
    }
    if (isSmall) {
      this.setState({ backgroundImage1: bck1_sm })
      this.setState({ backgroundImageWebp: bck1_sm_webp })
    }
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <header
        style={{
          backgroundImage: `url(${this.state.backgroundImageWebp}), url(${this.state.backgroundImage1})`,

          /*  backgroundImage: `url(../assets/13-16.png)`, */
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
                {this.state.siteTitle}
              </Link>
            </h3>
            <p className="header-title-p">
              <i>{this.state.subtitle}</i>
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
}

export default Header
