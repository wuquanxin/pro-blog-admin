const path = require('path');
const isMain = () => {
    let root = process.env.VUE_APP_ROOT;
    return root ? true : false
}
const getBuildPath = () => {
    let isDev = process.env.NODE_ENV === 'development';
    return isDev ? '/' : (isMain() ? '/main/' : '/test/system')
}

module.exports = {
    outputDir: 'dist', // 输出文件目录
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    publicPath: getBuildPath(),  // 相对于当前入口文件路径
    // 配置路径
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', path.join(__dirname, 'src'))
            .set('@a', path.join(__dirname, 'src/assets'))
            .set('@c', path.join(__dirname, 'src/components'))
            .set('@s', path.join(__dirname, 'src/style'))
            .set('@u', path.join(__dirname, 'src/utils'))
    },
    // 反向代理
    devServer: {
        proxy: {
            '/dev': {
                target: 'http://localhost:8899',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/dev': ''
                }
            }
        }
    },
    configureWebpack: {
        externals: {
          'axios': 'axios',
          'vue': 'Vue',
          'vue-router': 'VueRouter'
        }
    }
}