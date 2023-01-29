/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Shreyan's Blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-emotion"]
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        /**
        * One convention is to place your Netlify CMS customization code in a
        * `src/cms` directory.
        */
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ]
};