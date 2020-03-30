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
        port:3002,
        open:true
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