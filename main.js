import Vue from 'vue' // 引入vue
import App from './App.vue' // 引入页面

new Vue ({
  el: '#app',
  render: h => h(App) // 页面最开始展示的页面
})