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
              <div className="dropdown-divider"></div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div class="box-container">
          {/*  <svg>
            <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: "none", fill: "#fbef94" }} ></path>
          </svg>
          <path id="squiggle" d="M0,0" /> */}
          <svg height="125" width="1349">
            <path d="M -35 100 s 35 50 75 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="none" />
            <path d="M 40 100 s 75 -125 150 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="rgb(255, 195, 56)" />
            <path d="M 190 100 s 35 50 75 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="none" />
            <path d="M 265 100 s 75 -125 150 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="rgb(255, 195, 56)" />
            <path d="M 415 100 s 35 50 75 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="none" />
            <path d="M 490 100 s 75 -125 150 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="rgb(255, 195, 56)" />
            <path d="M 640 100 s 35 50 75 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="none" />
            <path d="M 715 100 s 75 -125 150 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="rgb(255, 195, 56)" />
            <path d="M 865 100 s 35 50 75 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="none" />
            <path d="M 940 100 s 75 -125 150 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="rgb(255, 195, 56)" />
            <path d="M 1090 100 s 35 50 75 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="none" />
            <path d="M 1165 100 s 75 -125 150 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="rgb(255, 195, 56)" />
            <path d="M 1315 100 s 35 50 75 0" stroke="rgb(255, 195, 56)" stroke-width="5" fill="none" />
  Sorry, your browser does not support inline SVG.
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
