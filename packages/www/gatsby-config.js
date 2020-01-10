const config = require('./gatsby-theme-portfolio-blog/config')

module.exports = {
  plugins: [
    'gatsby-theme-portfolio-blog'
  ],
  siteMetadata: {
    title: config.title,
    titleTemplate: '%s · Christian Kirkeby',
    description: config.description,
    siteUrl: config.siteUrl,
    logo: '/content/assets/logo.svg',
    social: config.social
  }
}
