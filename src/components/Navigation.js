import React from "react"
import { Link } from "@reach/router"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import "../lib/bootstrap.min.css"

const Navigation = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active",
          })
          : this.setState({
            navBarActiveClass: "",
          })
      }
    )
  }

  render() {
    return (
      <div className="navigation">
        <Navbar bg="link" className="navigation-content" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div className="dropdown-divider"></div>
              <NavLink className="navigation-link" to="/omeni">
                O&nbsp;meni
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavDropdown
                title="Komunikacija"
                id="basic-nav-dropdown"
                className="navigation-dropdown-link navigation-link"
              >
                <div className="dropdown-divider"></div>

                <NavLink className="navigation-link" to="/komunikacija-partner">
                  Komunikacija s partnerjem
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="navigation-link" to="/komunikacija-sluzba">
                  Komunikacija v službi
                </NavLink>
                <div className="dropdown-divider"></div>
              </NavDropdown>
              <div className="dropdown-divider"></div>

              <NavLink className="navigation-link" to="/predavanja">
                Predavanja
              </NavLink>
              <NavLink className="navigation-link" to="/delavnice">
                Delavnice
              </NavLink>
              <NavLink className="navigation-link pomoc" to="/pomoc-pri-promociji">
                Pomoč pri promociji
              </NavLink>
              <NavLink className="navigation-link" to="/blog">
                Blog
              </NavLink>
              {/*  <NavLink className="navigation-link" to="/zahvale">
                Zahvale
              </NavLink> */}
              <div className="dropdown-divider"></div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div class="box-container">
          {/*  <svg>
            <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: "none", fill: "#fbef94" }} ></path>
          </svg>
          <path id="squiggle" d="M0,0" /> */}
          <svg height="200" width="1349">
            {/* <path fill="#0099ff" fill-opacity="1" d="M-2.04,19.18 C150.00,149.60 271.37,-49.87 500.00,49.85 L500.00,0.00 L-0.00,0.00 Z"></path>
    */}
            {/*  <path class=”st0" d=M-0.00,49.85 C150.00,149.60 271.37,-49.87 500.00,49.85 L500.00,0.00 L-0.00,0.00 M-2.04,19.18 C167.83,158.94 271.37,-49.87 1500.00,49.85 L1500.00,0.00 L-0.00,0.00 Z ”/>
            */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="320 2000 2000 320"><path fill="#fbee97" fill-opacity="1" d="M0,32L30,69.3C60,107,120,181,180,197.3C240,213,300,171,360,144C420,117,480,107,540,101.3C600,96,660,96,720,117.3C780,139,840,181,900,186.7C960,192,1020,160,1080,133.3C1140,107,1200,85,1260,90.7C1320,96,1380,128,1410,144L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>

            {/*            <path fill="#0099ff" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,144C672,128,768,128,864,154.7C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
 */}

          </svg>
        </div>
      </div>
    )
  }
}
const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "black" : "black",
          backgroundColor: isCurrent ? "fbf0af" : "",
          boxShadow: isCurrent ? "3px 4px 17px 6px #e4bd82" : "",
          borderRadius: isCurrent ? "18px" : ""
        },
      }
    }}
  />
)

export default Navigation
