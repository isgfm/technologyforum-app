const path = require('path');
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
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
      devtool: 'source-map',
      plugins: [
        new CKEditorWebpackPlugin( {
            language: 'zh-cn'
        } ),
        new VuetifyLoaderPlugin()
    ]
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
          .set('@common',resolve('src/components/common'));
          // .set('base',resolve('src/base'))
          // .set('static',resolve('src/static'))


          const svgRule = config.module.rule( 'svg' );
          svgRule.exclude.add( path.join( __dirname, 'node_modules', '@ckeditor' ) );
          config.module
              .rule( 'cke-svg' )
              .test( /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/ )
              .use( 'raw-loader' )
              .loader( 'raw-loader' );
          config.module
              .rule( 'cke-css' )
              .test( /ckeditor5-[^/\\]+[/\\].+\.css$/ )
              .use( 'postcss-loader' )
              .loader( 'postcss-loader' )
              .tap( () => {
                  return styles.getPostCssConfig( {
                      themeImporter: {
                          themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' ),
                      },
                      minify: true
                  } );
              } );
  },
  transpileDependencies: [
    /ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/,
  ],
}