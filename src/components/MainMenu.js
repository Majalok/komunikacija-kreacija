import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BrowserRouter } from "react-router-dom"

/* import { Link } from 'react-router-dom' */
import { Link } from "@reach/router"
import LazyLoad from "react-lazy-load"

import { CSSTransition, CSSTransitionGroup } from "react-transition-group"

import { FaAlignJustify } from "react-icons/fa" /* import logo1 from "./../../assets/icons/Synology_logo_black.svg"
import logo2 from "./../../assets/icons/Qnap_logo_black.svg"
import logo3 from "./../../assets/icons/icon_backup_box1.png" */

/* import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
 */ class MainMenu extends React.Component {
  constructor() {
    super()

    this.state = {
      show: false,
      displayMenu: false,
      showProduct: false,
      redirectToProducts: false,
      pathname: "",

      product1: {
        productName: "Komunikacija ",
        productId: 1,
        productList: [
          {
            id: 2,
            name: "Osebna komunikacija",
            link: "/osebna-komunikacija",
            /*  img_url: logo1 */
          },
          {
            id: 3,
            name: "Komunikacija s partnerjem",
            link: "/komunikacija-partner",
            /*  img_url: logo1 */
          },
          {
            id: 4,
            name: "Komunikacija z otrokom",
            link: "/komunikacija-otrok",
            /*  img_url: logo1 */
          },
          {
            id: 5,
            name: "Komunikacija v službi",
            link: "/komunikacija-sluzba",
            /*                     img_url: logo2
             */
          },
          {
            id: 6,
            name: "Splošna komunikacija",
            link: "/komunikacija-splosna",
            /*  img_url: logo1 */
          },
          {
            id: 7,
            name: "Poslušalka",
            link: "/poslusalka",
            /*  img_url: logo1 */
          },
        ],
      },
      selectedProduct: {},
      selectedMenuItem: 1,
      displayResponsiveMenu: false,
      displaySubmenu: false,
    }
    this.state.selectedProduct.productList = []

    this.toggleMenu = this.toggleMenu.bind(this)
    this.displayMenuBoxPanel = this.displayMenuBoxPanel.bind(this)
    this.hideMenuBoxPanel = this.hideMenuBoxPanel.bind(this)

    /* this.setState({
            displayMenu: true,
            selectedProduct: this.state["Komunikacija"]
        }) */
  }

  toggleMenu() {
    this.setState({
      show: !this.state.show,
      displayResponsiveMenu: true,
    })
  }

  displayMenuBoxPanel(event, id) {
    let productName = event.currentTarget.id
    if (productName) {
      this.setState({
        displayMenu: true,
        selectedProduct: this.state.product1,
      })
    }
  }
  setMenuItemSelected = e => {
    let selectedId = e.currentTarget.id
    switch (selectedId) {
      case 2:
        selectedId = 1
        break
      case 3:
        selectedId = 1
        break
      case 4:
        selectedId = 1
        break
      case 5:
        selectedId = 1
      case 6:
        selectedId = 1
        break
      case 7:
        selectedId = 1
        break
      default:
        selectedId = e.target.id
        break
    }

    this.setState({
      selectedMenuItem: selectedId,
    })
    if (selectedId == 1) {
      // console.log("A", selectedId)
      this.setState({
        displaySubmenu: true,
        show: true,
      })
    } else if (
      Number(selectedId) === 2 ||
      Number(selectedId) === 3 ||
      Number(selectedId) === 4 ||
      Number(selectedId) === 5 ||
      Number(selectedId) === 6 ||
      Number(selectedId) === 4
    ) {
      this.setState({
        displaySubmenu: false,
        displayResponsiveMenu: false,
        show: false,
      })
    } else {
      this.setState({
        displaySubmenu: false,
        displayResponsiveMenu: false,
        show: false,
      })
    }
  }

  hideMenuBoxPanel(event) {
    this.setState({
      displayMenu: false,
    })
    /*  this.refs.products.style.background = "#292929";
         this.refs.products.style.color = "white";
    */
  }
  render() {
    return [
      <div className="top-content-menu" key="top-content-menu">
        <div className="content-menu">
          <div
            className="box-container-1"
            style={{
              backgroundImage: `url(../assets/pngTest1111-inv.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "repeat-x",
              height: "70px",
            }}
          ></div>
          <div className="main-menu-top" key="main-menu-top">
            <div onClick={this.toggleMenu}>
              <FaAlignJustify className="burger-menu-icon" />
            </div>

            <div
              className={
                "main-menu-links " +
                (this.state.show && this.state.displayResponsiveMenu
                  ? "toggleMenu"
                  : "")
              }
            >
              <Link
                id="0"
                className={
                  "main-menu-link " +
                  (this.state.selectedMenuItem === 0 ? "selected" : "")
                }
                ref="0"
                key="0"
                onMouseOver={this.hideMenuBoxPanel}
                to="/omeni/"
                onClick={this.setMenuItemSelected}
                /*  style={{
                                 backgroundImage: `url("../assets/vil11.png")`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat',
                                 height: 'auto',
                                 backgroundPositionX: 'center',
                                 backgroundPositionY: 'center'
                             }} */
              >
                <span className="menu-title">O meni</span>
              </Link>
              <Link
                id="12"
                className={
                  "main-menu-link " +
                  (this.state.selectedMenuItem === 0 ? "selected" : "")
                }
                ref="12"
                key="12"
                onMouseOver={this.hideMenuBoxPanel}
                to="/aktualno/"
                onClick={this.setMenuItemSelected}
                /*  style={{
                                 backgroundImage: `url("../assets/vil11.png")`,
                                 backgroundSize: 'contain',
                                 backgroundRepeat: 'no-repeat',
                                 height: 'auto',
                                 backgroundPositionX: 'center',
                                 backgroundPositionY: 'center'
                             }} */
              >
                <span className="menu-title">Aktualno</span>
              </Link>
              <div
                id="1"
                to=""
                ref="products"
                key="1"
                className={
                  "main-menu-link " +
                  (this.state.selectedMenuItem === 1 ? "selected" : "")
                }
                onClick={this.setMenuItemSelected}
                onMouseOver={this.displayMenuBoxPanel}
                name="product1"
              >
                <span className="menu-title">Komunikacija </span>

                {/*                             <FontAwesomeIcon icon={faAngleDown} />

 */}
                {
                  /* this.state.displayMenu && */
                  <CSSTransition
                    in={this.state.displayMenu}
                    unmountOnExit
                    timeout={200}
                    classNames="example"
                  >
                    <div className="main-menu-panel">
                      <div
                        className="main-menu-products"
                        onMouseEnter={this.displayMenuBoxPanel}
                        onMouseLeave={this.hideMenuBoxPanel}
                      >
                        {this.state.selectedProduct.productList.map(product => (
                          <Link
                            key={product.id}
                            className="main-menu-product-box"
                            id={product.type}
                            to={product.link}
                            onClick={this.selectedMenuItem}
                          >
                            <p
                              key={product.id}
                              id={product.id}
                              className="main-menu-product-desc"
                            >
                              {product.name}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </CSSTransition>
                }
              </div>
              {/*  <div key="main-menu-submenu" className={"main-menu-submenu " + (this.state.displaySubmenu === true ? "submenu-show" : '')}>
               */}
              <div
                key="main-menu-submenu"
                className={"main-menu-submenu submenu-show"}
              >
                <Link
                  id="2"
                  key="2"
                  className="main-menu-link submenu"
                  onClick={this.setMenuItemSelected}
                  to="/osebna-komunikacija"
                >
                  &nbsp;&nbsp;Osebna komunikacija
                </Link>
                <Link
                  id="3"
                  key="3"
                  className="main-menu-link submenu"
                  onClick={this.setMenuItemSelected}
                  to="/komunikacija-partner"
                >
                  &nbsp;&nbsp;Komunikacija s partnerjem
                </Link>
                <Link
                  id="4"
                  key="4"
                  className="main-menu-link submenu"
                  onClick={this.setMenuItemSelected}
                  to="/komunikacija-otrok"
                >
                  &nbsp;&nbsp;Komunikacija z otrokom
                </Link>
                <Link
                  id="5"
                  key="5"
                  className="main-menu-link submenu"
                  onClick={this.setMenuItemSelected}
                  to="/komunikacija-sluzba"
                >
                  &nbsp;&nbsp;Komunikacija v službi
                </Link>
                <Link
                  id="6"
                  key="6"
                  className="main-menu-link submenu"
                  onClick={this.setMenuItemSelected}
                  to="/komunikacija-splosna"
                >
                  &nbsp;&nbsp;Splošna komunikacija
                </Link>
                <Link
                  id="7"
                  key="7"
                  className="main-menu-link submenu"
                  onClick={this.setMenuItemSelected}
                  to="/poslusalka"
                >
                  &nbsp;&nbsp;Poslušalka
                </Link>
              </div>
              <Link
                id="8"
                key="8"
                className="main-menu-link"
                onClick={this.setMenuItemSelected}
                to="/predavanja/"
              >
                {" "}
                <span className="menu-title">Predavanja</span>
              </Link>
              {/* <Link id="9"
                                key="9"
                                className="main-menu-link"
                                onClick={this.setMenuItemSelected}
                                to="/delavnice/"
                            > <span className="menu-title">Delavnice</span>
                            </Link> */}

              <Link
                id="10"
                key="10"
                className={
                  "main-menu-link" +
                  (this.state.selectedMenuItem === 2 ? "selected" : "")
                }
                onMouseOver={this.hideMenuBoxPanel}
                onClick={this.setMenuItemSelected}
                to="/pomoc-pri-promociji/"
              >
                <span className="menu-title">Pomoč pri promociji</span>
              </Link>
              <Link
                id="11"
                key="11"
                ref="11"
                className={
                  "main-menu-link " +
                  (this.state.selectedMenuItem === 4 ? "selected" : "")
                }
                onMouseOver={this.hideMenuBoxPanel}
                to="/blog/"
                onClick={this.setMenuItemSelected}
              >
                <span className="menu-title">Blog</span>
              </Link>
              <Link
                id="13"
                key="13"
                ref="13"
                className={
                  "main-menu-link " +
                  (this.state.selectedMenuItem === 4 ? "selected" : "")
                }
                onMouseOver={this.hideMenuBoxPanel}
                to="/kontakt/"
                onClick={this.setMenuItemSelected}
              >
                <span className="menu-title">Kontakt</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="box-container"
          style={{
            backgroundImage: `url(../assets/pngTest111-bottom.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat-x",
            height: "70px",
          }}
        ></div>
      </div>,
    ]
  }
}
export default MainMenu
