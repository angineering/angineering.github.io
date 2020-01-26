module.exports = {
  siteMetadata: {
    title: `Angela Branaes`,
    description: `Angela Branaes' homepage.`,
    author: `@angelabranaes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `angelabranaes`,
        short_name: `angelabranaes`,
        start_url: `/`,
        background_color: `#F9E4F0`,
        theme_color: `#F9E4F0`,
        display: `minimal-ui`,
        //icon: ``, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
