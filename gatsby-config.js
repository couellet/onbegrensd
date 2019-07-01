const config = require('./src/data/SiteConfig')
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'standalone',
        icon: 'src/images/favicon-onbegrensd.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: config.siteSnipcartKEY,
        autopop: true,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: config.siteAnalythicsKEY,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
}
