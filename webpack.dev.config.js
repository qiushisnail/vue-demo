const merge = require('webpack-merge') //  用于合并两个配置文件的工具
const common = require('./webpack.config') // 加载之前定义的配置文件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 将所有配置好的文件打包成一个html文件
module.exports = merge(common, {
  output:{
    path:  '/', // 热加载不能指定输出文件，输出的文件会缓存在这里， 必须这样配置
    filename: '[name]'.js // 打包后输出文件的名，[name]是入口文件的key作为名称
  },
  devServer:{ // webpack-server 配置
    host: '127.0.0.1', // 服务器显示的地址
    port: '8082',
    open: true, // 服务器是否打开浏览器
    contentBase: './', // 服务器加载的目录，会找到该目录下的index.html进行页面展示
    inline: true, // 页面刷新方式
    proxy: { // 配置代理, 前后端分离时需要，读取后端接口数据
      '/': {  // 代理所有的url请求
        target: 'http://localhost:9876' // 代理的地址
      }
    }
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