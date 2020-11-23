module.exports = {
  siteMetadata: {
    title: "Komunikacija je kreacija",
    subtitle:
      "by Nataša Muc",
    description: " opis Komunikacija je kreacija",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/blog`,
      },
    },
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
    "gatsby-plugin-netlify-cms",

    // ... other plugins
  ],
}
