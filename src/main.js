// 入口文件
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)

// 导入axios
import axios from 'axios' 

// axios.defaults.baseURL="http://localhost:3000"
Vue.prototype.$axios = axios;

// 2.1导入vue-resource
import VueResource from 'vue-resource'
// 2.2使用
Vue.use(VueResource)


// 导入mui 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'




// 按需导入mint-UI中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 1.3导入自己的 router.js 路由模块
import router from './router.js'

// 导入App根组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router //1.4挂载路由对象到VM实例上
})