module.exports = {
  siteMetadata: {
    title: "Komunikacija je kreacija",
    subtitle:
      "by Nataša Muc",
    description: "Komunikacija, kreacija, pogovor, pogovarjati se, slišati, poslušanje, pomoč, svetovanje, sprememba, naučiti se, zdrav odnos, odnosi, partner, otrok, družba, služba, okolica, blog, delavnice, vilinski simboli, origami, ptica",
    url: "www.komunikacija-kreacija.si",
    author: "Maja L",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `images`,
      },
    },
    /*  {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `content`,
         path: `${__dirname}/content/blog`,
       },
     }, */
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,

      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`, // for the path you can change it based on your preferred folder structure
      },
    },
    "gatsby-plugin-offline",
    /* "gatsby-plugin-layout", */
    "gatsby-theme-gallery",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Komunikacija je kreacija",
        short_name: "komunikacija-kreacija",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/icons/kom-kr-logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      }
    },
    "gatsby-plugin-netlify-cms",

    // ... other plugins
  ],
}
