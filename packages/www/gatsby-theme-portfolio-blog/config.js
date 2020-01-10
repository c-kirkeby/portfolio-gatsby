// This is intended to be shadowed. Options will be used to populate manifest 
// and siteMetadata.

const meta = {
  title: 'Christian Kirkeby',
  titleTemplate: '%s · Christian Kirkeby',
  description: `This will be used for SEO. Fill this in with what you 
                    want to show up in search engines.`,
  themeColor: '#8f4efc',
  siteUrl: 'https://christiankirkeby.com'
}

const social = [{
  name: 'GitHub',
  url: 'https://github.com/c-kirkeby'
}]

module.exports = {
  ...meta,
  social
}