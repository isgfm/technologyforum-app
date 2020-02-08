const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
      proxy: {
        '/api':{
          target:'http://localhost:3333/api/',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
        
    },
    configureWebpack: {
      devtool: 'source-map'
    },
    chainWebpack: (config)=>{
      config.resolve.alias
          .set('@', resolve('src'))
          .set('@api',resolve('src/api'))
          .set('@util',resolve('src/util'))
          .set('@components',resolve('src/components'))
          .set('@frontdesk',resolve('src/components/frontdesk'))
          .set('@backstage',resolve('src/components/backstage'))
          .set('@constant',resolve('src/constant'))
          // .set('base',resolve('src/base'))
          // .set('static',resolve('src/static'))
  }
}