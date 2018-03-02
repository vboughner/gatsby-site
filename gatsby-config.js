module.exports = {
  // Note: pathPrefix must *not* have a trailing slash
  pathPrefix: `/docs`,

  siteMetadata: {
    title: `CLOUDWAN API Documentation`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/`,
        name: `markdown`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
