import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

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
  const scrollToTopRoutes = [`/privacy-policy`, `/page-2`]
  // if the new route is part of the list above, scroll to top (0, 0)
  if (scrollToTopRoutes.indexOf(pathname) !== -1) {
    window.scrollTo(0, 0)
  }

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
    >
      {element}
    </GoogleReCaptchaProvider>
  )
}
