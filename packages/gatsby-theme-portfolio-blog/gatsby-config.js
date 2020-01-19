const remarkSlug = require('remark-slug')
const config = require('./config')

module.exports = options => ({
  siteMetadata: {
    title: config.title,
    titleTemplate: '%s · ' + config.title,
    description: config.description,
    siteUrl: config.siteUrl,
    logo: '/content/assets/logo.svg',
    social: config.social
  },
  plugins: [
    {
      resolve: 'gatsby-theme-ui-blog',
      options: {
        basePath: '/blog',
        mdx: 'false'
      }
    },
    {
      resolve: 'gatsby-plugin-theme-ui',
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [
          remarkSlug
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: config.title,
        lang: 'en-US',
        description: config.description,
        start_url: '/',
        theme_color: config.themeColor,
        background_color: config.backgroundColor,
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline'
  ]
})
