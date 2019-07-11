const merge = require('webpack-merge') //  用于合并两个配置文件的工具
const common = require('./webpack.config.js') // 加载之前定义的配置文件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 将所有配置好的文件打包成一个html文件
module.exports = merge(common, {
  output:{
    path: __dirname + '/../src/main/webapp/assets/dist/', // 打包后文件存放的地址，__dirname是webpack的全局关键字，存放的是项目根目录的绝对路径
    filename: '[name]'.js // 打包后输出文件的名，[name]是入口文件的key作为名称
  },
  plugins: [
    new HtmlWebpackPlugin({ // new 实例
      title: '首页', // 生成的html文件的title
      template: 'index.html', // 可以定义好模板，生成的html文件会继承模板的所有内容，如果模板中title有值，上面定义的title就不会生效
      filename: 'index.html', // 生成的html文件的名称
      hash: true, // 是否产生hash值
      chunks: ['index'], // 加载js文件，这个文件就是js的输出文件名
      chunksSortMode: 'manual' // 排序方式
    })
  ],
  devtool: 'inline-source-map' // 开启控制台输出错误信息具体在哪行
})