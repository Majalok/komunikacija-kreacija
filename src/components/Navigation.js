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
        {/*  <div class="box-container-1" style={{
          backgroundImage: `url(../assets/wave4-inv.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
          height: '70px'
        }}></div> */}
        <Navbar bg="link" className="navigation-content" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div className="dropdown-divider"></div>
              <NavLink className="navigation-link" to="/omeni/"  >
                <div className="nav-link-background" style={{
                  backgroundImage: `url(../icons/vilinski2.png)`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  height: '105px',
                  opacity: '1'
                }} ><div className="nav-text">O&nbsp;meni </div>
                </div>

                {/*         <div className="nav-text">O&nbsp;meni</div> */}

              </NavLink>

              {/* <div className="navigation-icons">
                <img src="../icons/vilinski1.png" width="25px" alt="" />
              </div> */}
              <div className="dropdown-divider"></div>

              <NavLink className="navigation-link" to="/komunikacija-partner/">
                <div className="nav-link-background">
                  <div className="nav-text">Komunikacija</div>
                </div>
              </NavLink>
              <NavDropdown
                id="basic-nav-dropdown"
                className="navigation-dropdown-link navigation-link"
              >
                <div className="dropdown-divider"></div>

                <NavLink className="navigation-link" to="/komunikacija-partner/">
                  <div className="nav-text">Komunikacija s partnerjem</div>
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="navigation-link" to="/komunikacija-sluzba/">
                  <div className="nav-text"> Komunikacija v službi</div>
                </NavLink>
                <div className="dropdown-divider"></div>
              </NavDropdown>
              <div className="dropdown-divider"></div>

              <NavLink className="navigation-link" to="/predavanja/" >
                <div className="nav-link-background"></div>
                <div className="nav-text"> Predavanja </div>
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="navigation-link" to="/delavnice/">
                <div className="nav-link-background">
                </div>
                <div className="nav-text"> Delavnice </div>
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="navigation-link pomoc" to="/pomoc-pri-promociji/">
                <div className="nav-link-background"></div>

                <div className="nav-text">Pomoč pri promociji</div>
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="navigation-link" to="/blog/">
                <div className="nav-link-background"></div>
                <div className="nav-text"> Blog</div>
              </NavLink>
              {/*  <NavLink className="navigation-link" to="/zahvale">
                Zahvale
              </NavLink> */}
              <div className="dropdown-divider"></div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="box-container" style={{
          backgroundImage: `url(../assets/wave4.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
          height: '70px'
        }} >
          {/*  <svg>
            <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: "none", fill: "#fbef94" }} ></path>
          </svg>
          <path id="squiggle" d="M0,0" /> */}
          {/* <svg height="200" width="1349">
        
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="320 2000 2000 320"><path fill="#fbee97" fill-opacity="1" d="M0,32L30,69.3C60,107,120,181,180,197.3C240,213,300,171,360,144C420,117,480,107,540,101.3C600,96,660,96,720,117.3C780,139,840,181,900,186.7C960,192,1020,160,1080,133.3C1140,107,1200,85,1260,90.7C1320,96,1380,128,1410,144L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>

          </svg> */}
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
          /* boxShadow: isCurrent ? "3px 4px 17px 6px #f8a406" : "", */
          borderRadius: isCurrent ? "18px" : ""
        },
      }
    }}
  />
)

export default Navigation
