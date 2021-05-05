import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
/* import scrollToElement from 'scroll-to-element' */

require("./src/css/header.scss")
require("./src/css/mainMenu.scss")
require("./src/css/main.scss")
require("./src/css/blog.scss")
require("./src/css/omeni.scss")
require("./src/css/gallery.scss")
require("./src/css/komunikacija.scss")
require("./src/css/contactForm.scss")
require("./src/css/kontakt.scss")
require("./src/css/aktualno.scss")
require("./src/css/message-confirm.scss")

// in gastby-browser.js
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location
  // list of routes for the scroll-to-top-hook
  const scrollToTopRoutes = [`/privacy-policy`]//, `/blogb`]
  // if the new route is part of the list above, scroll to top (0, 0)
  if (scrollToTopRoutes.indexOf(pathname) !== -1) {
    console.log("0!!!")
    window.scrollTo(0, 0)
  }
  /*  if (window.location.hash) {
     console.log("1!!!")
     let id = window.location.hash
     //const blogElToScroll = document.querySelector(id)
     //console.log("conf blogElToScroll: ", blogElToScroll)
     // console.log("conf blogElToScroll.offsetTop: ", blogElToScroll.offsetTop)
 
     //window.scrollTo(0, blogElToScroll.offsetTop + 300)
   } */

  return false
}

export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LfGuxsaAAAAAMbVSYcIXABn5VO183wlMCfNxpwh"
      scriptProps={{
        async: true, // optional, default to false,
        defer: true, // optional, default to false
      }}
      size="invisible"
    >
      {element}
    </GoogleReCaptchaProvider>
  )
}

/*
export const onRouteUpdate = ({ location }) => {
  checkHash(location)
}

const checkHash = location => {
  let { hash } = location
  if (hash) {
    scrollToElement(hash, {
      offset: -95,
      duration: 1000,
    })
  }
} */

