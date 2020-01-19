// This is intended to be shadowed. Options will be used to populate manifest 
// and siteMetadata.

const meta = {
  title: 'Fill this in with the title to be shown in browser title',
  titleTemplate: '%s · John Smith',
  siteUrl: 'https://christiankirkeby.com',
  description: `This will be used for SEO. Fill this in with what you 
                    want to show up in search engines.`,
  themeColor: '#8f4efc',
  backgroundColor: '#fefefe'
}

const social = [{
  name: 'Github',
  url: 'https://github.com/c-kirkeby'
}]

module.exports = {
  ...meta,
  social
}