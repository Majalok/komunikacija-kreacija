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
