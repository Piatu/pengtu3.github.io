const { defineConfig } = require('@vue/cli-service')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 代码压缩
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const path = require('path')
// const isProduction = process.env.NODE_ENV === 'production'

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

module.exports = defineConfig({
  transpileDependencies: true,
  
	lintOnSave:false,

    // build: {
  //   index: path.resolve(__dirname, '../docs/index.html'),
    
  //   assetsRoot: path.resolve(__dirname, '../docs'),
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath:'./'
  // }

  outputDir: './docs',
  assetsDir: 'static',
  publicPath: './',  // 基本路径
  // indexPath: './index.html', // html 的输出路径
 
})
