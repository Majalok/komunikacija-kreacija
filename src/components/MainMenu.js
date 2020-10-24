import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter } from 'react-router-dom';

/* import { Link } from 'react-router-dom' */
import { Link } from "@reach/router"
import LazyLoad from 'react-lazy-load';


import { FaAlignJustify } from 'react-icons/fa'



/* import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
 *//* import logo1 from "./../../assets/icons/Synology_logo_black.svg"
import logo2 from "./../../assets/icons/Qnap_logo_black.svg"
import logo3 from "./../../assets/icons/icon_backup_box1.png" */

class MainMenu extends React.Component {

    constructor() {
        super();

        this.state = {
            show: false,
            displayMenu: false,
            showProduct: false,
            redirectToProducts: false,
            pathname: '',

            product1: {
                productName: "Komunikacija ",
                productId: 1,
                productList: [{
                    id: 2,
                    name: 'Osebna komunikacija',
                    link: '/osebna-komunikacija',
                    /*  img_url: logo1 */
                },
                {
                    id: 3,
                    name: 'Komunikacija s partnerjem',
                    link: '/komunikacija-partner',
                    /*  img_url: logo1 */
                },
                {
                    id: 3,
                    name: 'Komunikacija z otrokom',
                    link: '/komunikacija-otrok',
                    /*  img_url: logo1 */
                },
                {
                    id: 4,
                    name: 'Komunikacija v službi',
                    link: '/komunikacija-sluzba',
/*                     img_url: logo2
 */             },
                {
                    id: 5,
                    name: 'Splošna komunikacija',
                    link: '/komunikacija-prijatelji',
                    /*  img_url: logo1 */
                },
                {
                    id: 6,
                    name: 'Poslušalka',
                    link: '/poslusalka',
                    /*  img_url: logo1 */
                },
                ]
            },
            selectedProduct: {},
            selectedMenuItem: 1,
            displayResponsiveMenu: false,
            displaySubmenu: false

        };

        this.toggleMenu = this.toggleMenu.bind(this)
        this.displayMenuBoxPanel = this.displayMenuBoxPanel.bind(this);
        this.hideMenuBoxPanel = this.hideMenuBoxPanel.bind(this);

        /* this.setState({
            displayMenu: true,
            selectedProduct: this.state["Komunikacija"]
        }) */

    };

    toggleMenu() {
        this.setState({
            show: !this.state.show,
            displayResponsiveMenu: true
        }
        )
    }

    displayMenuBoxPanel(event, id) {

        event.preventDefault();

        let productName = event.target.name

        /*   this.refs.products.style.background = "linear-gradient(to bottom, #8aa9ff 1px, #fffefe 3px)";
          this.refs.products.style.color = "#292929";
   */
        if (productName) {
            this.setState({
                displayMenu: true,
                selectedProduct: this.state[productName]
            })
        }
    }
    setMenuItemSelected = (e) => {
        let selectedId = e.target.id
        switch (selectedId) {
            case 4:
                selectedId = 1
                break
            case 5:
                selectedId = 1
                break
            case 6:
                selectedId = 1
                break
            default:
                selectedId = e.target.id
        }
        this.setState({
            selectedMenuItem: selectedId
        })

        if (selectedId == 1) {
            this.setState({
                displaySubmenu: true,
                show: true
            })
        }
        else if (Number(selectedId) === 5 || Number(selectedId) === 6 || Number(selectedId) === 4) {
            this.setState({
                displaySubmenu: false,
                displayResponsiveMenu: false,
                show: false
            })
        }
        else {
            this.setState({
                displaySubmenu: false,
                displayResponsiveMenu: false,
                show: false
            })
        }
    }

    hideMenuBoxPanel(event) {

        this.setState({
            displayMenu: false
        })
        /*  this.refs.products.style.background = "#292929";
         this.refs.products.style.color = "white";
  */
    }
    render() {


        return [
            <div className="top-content-menu" key="top-content-menu">


                <div className="content-menu">
                    <div class="box-container-1" style={{
                        backgroundImage: `url(../assets/pngTest1111-inv.png)`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'repeat-x',
                        height: '70px'
                    }} ></div>
                    <div className="main-menu-top" key="main-menu-top">
                        <div onClick={this.toggleMenu} >
                            <FaAlignJustify className="burger-menu-icon" />
                        </div>

                        <div className={"main-menu-links " + (this.state.show && this.state.displayResponsiveMenu ? "toggleMenu" : '')}>

                            <Link id="0"
                                className={"main-menu-link " + (this.state.selectedMenuItem === 0 ? "selected" : '')}
                                ref="0"
                                key="0"
                                onMouseOver={this.hideMenuBoxPanel}
                                to="/omeni/"
                                onClick={this.setMenuItemSelected}
                            ><span className="menu-title">O meni</span></Link>

                            <Link id="1" to=""
                                ref='products'
                                key="1"
                                className={"main-menu-link " + (this.state.selectedMenuItem === 1 ? "selected" : '')}
                                onClick={this.setMenuItemSelected}
                                onMouseOver={this.displayMenuBoxPanel}
                                name="product1"><span className="menu-title">Komunikacija{' '}</span>

                                {/*                             <FontAwesomeIcon icon={faAngleDown} />

 */}
                                {
                                    this.state.displayMenu &&


                                    <div className="main-menu-panel">

                                        <div className="main-menu-products" onMouseEnter={this.displayMenuBoxPanel} onMouseLeave={this.hideMenuBoxPanel} >
                                            {
                                                this.state.selectedProduct.productList.map((product) =>

                                                    <Link key={product.id}
                                                        className="main-menu-product-box"
                                                        id={product.type}
                                                        to={product.link}
                                                        onClick={this.selectedMenuItem}
                                                    >
                                                        <p key={product.id} id={product.id} className="main-menu-product-desc" >{product.name}</p>
                                                    </Link>
                                                )
                                            }
                                        </div>
                                    </div>
                                }



                            </Link>

                            {/* {
                                this.state.displayMenu &&
                                <div className="main-menu-panel">

                                    <div className="main-menu-products" onMouseEnter={this.displayMenuBoxPanel} onMouseLeave={this.hideMenuBoxPanel} >
                                        {
                                            this.state.selectedProduct.productList.map((product) =>

                                                <Link key={product.id}
                                                    className="main-menu-product-box"
                                                    id={product.type}
                                                    to={product.link}
                                                    onClick={this.selectedMenuItem}
                                                >
                                                    <p key={product.id} id={product.id} className="main-menu-product-desc" >{product.name}</p>
                                                    <LazyLoad
                                                        debounce={false}
                                                    >
                                                        <img key={product.id} id={product.id} className={'main-menu-img ' + product.name} src={product.img_url} alt="" />
                                                    </LazyLoad>
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                            } */}
                            <Link id="5"
                                key="5"
                                className="main-menu-link"
                                onClick={this.setMenuItemSelected}
                                to="/predavanja/"
                            > <span className="menu-title">Predavanja</span>
                            </Link>
                            <Link id="6"
                                key="6"
                                className="main-menu-link"
                                onClick={this.setMenuItemSelected}
                                to="/delavnice/"
                            > <span className="menu-title">Delavnice</span>
                            </Link>

                            <Link id="2"
                                key="2"
                                ref="2"
                                className={"main-menu-link" + (this.state.selectedMenuItem === 2 ? "selected" : '')}
                                onMouseOver={this.hideMenuBoxPanel}
                                onClick={this.setMenuItemSelected}
                                to="/pomoc-pri-promociji/" ><span className="menu-title">Pomoč pri promociji</span></Link>
                            <Link id="4"
                                key="4"
                                ref="4"
                                className={"main-menu-link " + (this.state.selectedMenuItem === 4 ? "selected" : '')}
                                onMouseOver={this.hideMenuBoxPanel}
                                to="/blog/"
                                onClick={this.setMenuItemSelected} ><span className="menu-title">Blog</span></Link>
                        </div>
                    </div>
                </div>
                <div class="box-container" style={{
                    backgroundImage: `url(../assets/pngTest111-bottom.png)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat-x',
                    height: '70px'
                }} ></div>


            </div>]
            ;

    }
}
export default MainMenu;