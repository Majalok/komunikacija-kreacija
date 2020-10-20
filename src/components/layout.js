import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Navigation from "./Navigation"
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
        backgroundImage: `url(../assets/1414.jpg)`,
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
        <div className="content-main-div">
          <div className="main-content-left" /* style={{
            backgroundImage: `url(../assets/11.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100 %'
          }} */ ></div>
          <main className="main-content">{children}</main>
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
