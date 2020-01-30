const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
      proxy: 'http://localhost:8080'
    },
    configureWebpack: {
      devtool: 'source-map'
    },
    chainWebpack: (config)=>{
      config.resolve.alias
          .set('@', resolve('src'))
          // .set('assets',resolve('src/assets'))
          .set('components',resolve('src/components'))
          .set('frontdesk',resolve('src/components/frontdesk'))
          .set('backstage',resolve('src/components/backstage'))
          // .set('layout',resolve('src/layout'))
          // .set('base',resolve('src/base'))
          // .set('static',resolve('src/static'))
  }
}