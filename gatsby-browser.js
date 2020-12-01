require("./src/css/header.scss")
require("./src/css/mainMenu.scss")
require("./src/css/main.scss")
require("./src/css/blog.scss")
require("./src/css/omeni.scss")
require("./src/css/gallery.scss")
require("./src/css/komunikacija.scss")
require("./src/css/contactForm.scss")

// in gastby-browser.js
exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    const { pathname } = location
    // list of routes for the scroll-to-top-hook
    const scrollToTopRoutes = [`/privacy-policy`, `/page-2`]
    // if the new route is part of the list above, scroll to top (0, 0)
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
        window.scrollTo(0, 500)
    }

    return false
}
