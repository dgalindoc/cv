const withSass = require('@zeit/next-sass')
const compose = require('next-compose')

module.exports = compose([
  [withSass],
  {
    assetPrefix: '/cv',
    webpack: (config) => {
    config.output.publicPath = `/cv${config.output.publicPath}`;
    return config;
    },
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    }
  }
])
