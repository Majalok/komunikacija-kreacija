import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import Helmet from "react-helmet"
import MainMenu from "./MainMenu"
import ContentMainDiv from "./ContentMainDiv"

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
      <div
        className="top-div"
        /* style={{
          backgroundImage: `url(../assets/2.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100 %",
        }} */
      >
        <Helmet>
          <title>Komunikacija je kreacija</title>
          <meta name="title" content="Komunikacija je kreacija" />
          <meta
            name="description"
            content="svetovanje odnosi predavanja delavnice partnerski odnos nebesedna izražanja"
          />
          {/*  <script
            src="https://www.google.com/recaptcha/api.js?onload=recaptchaLoaded&render=explicit"
            async
            defer
          ></script> */}
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          subtitle={data.site.siteMetadata.subtitle}
        ></Header>
        <MainMenu />
        <ContentMainDiv children={children} />
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
