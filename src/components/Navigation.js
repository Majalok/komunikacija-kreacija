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
              <NavLink className="navigation-link" to="/soocanja">
                Komunikacija
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavDropdown
                title="Svetovanje"
                id="basic-nav-dropdown"
                className="navigation-dropdown-link navigation-link"
              >
                <div className="dropdown-divider"></div>

                <NavLink className="navigation-link" to="/predavanja">
                  Predavanja
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="navigation-link" to="/delavnice">
                  Delavnice
                </NavLink>
                <div className="dropdown-divider"></div>
              </NavDropdown>
              <NavLink className="navigation-link" to="/svetovanje">
                Predavanje
              </NavLink>
              <NavLink className="navigation-link" to="/delavnice">
                Delavnice
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
          color: isCurrent ? "gray" : "gray",
          backgroundColor: isCurrent ? "#daf6fd" : "",
        },
      }
    }}
  />
)

export default Navigation
