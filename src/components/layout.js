import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import ContentRight from "./ContentRight"
import Helmet from "react-helmet"
import MainMenu from "./MainMenu"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <div className="top-div" style={{
        backgroundImage: `url(../assets/2.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100 %'
      }} >
        <Helmet>
          <title>Komunikacija je kreacija</title>
          <meta
            name="title"
            content="Komunikacija je kreacija"
          />
          <meta
            name="description"
            content="svetovanje odnosi predavanja delavnice partnerski odnos nebesedna izražanja"
          />
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          subtitle={data.site.siteMetadata.subtitle}
        >

        </Header>
        {/*  <Navigation /> */}
        <MainMenu />
        {/*         border: 10px solid transparent;
    padding: 15px;
    border-image: url(border.png) 20% round; */}
        <div className="content-main-div" style={{
          backgroundImage: `url(../assets/paper4.jpg)`,
          /*backgroundImage: `url(../assets/paper5.jpg)`, **/
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100 %'
        }}>
          <div className="main-content-left" /* style={{
            backgroundImage: `url(../assets/11.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100 %'
          }} */ ></div>
          <main className="main-content" /* style={{
            border: '40px solid transparent',
            borderImage: `url("../assets/vil1.png") 100%`,
            padding: '15px',
          }} */>{children}</main>
          <div className="main-content-right" /* style={{
            backgroundImage: `url(../assets/11.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100 %'
          }} */>
            <ContentRight />
          </div>
        </div>


        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
