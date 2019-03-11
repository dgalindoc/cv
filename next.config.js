const withSass = require('@zeit/next-sass')
const compose = require('next-compose')

module.exports = compose([
  [withSass],
  {
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    }
  }
])
