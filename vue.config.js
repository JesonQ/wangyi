const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 75   // remUnit的值 === 设计稿 / 10   设计稿宽750px
})
module.exports={
    lintOnSave:false,
    devServer:{
        port:3000,
        open:true,
        proxy:{   //跨域配置
          '/3000': {
              target: 'http://localhost:3000',
              changeOrigin: true, //允许跨域
              pathRewrite: {
                '^/3000': ''
              }
            },
              '/api': {
                target: 'https://m.you.163.com', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
              }
            }
        },
        css: {
          loaderOptions: {
            postcss: {
              plugins: [
                postcss
              ]
            }
         }
    },
    configureWebpack:{
        resolve: {
            alias: {
                'components': resolve('src/components'),
                'pages': resolve('src/pages'),
            }
        }
    }
}