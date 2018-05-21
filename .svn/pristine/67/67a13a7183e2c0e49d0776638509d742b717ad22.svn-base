// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//快速点击插件
import FastClick from 'fastclick'
//路由插件
import VueRouter from 'vue-router'
//引入路由配置
import routes from './router/router'
//引入store管理配置
import store from './store/'
import App from './App'
import Vuex from 'vuex'
//echarts插件
import echarts from 'echarts'
//echarts绘图参数设置
import draw from './plugins/draw'
//socket签名插件
import socketsign from './plugins/socketsign'
//websocket心跳包插件
import heartbeat from './plugins/heartbeat'
//k线数据格式化
import formatdata from './plugins/formatdata'
//axios前后端通讯服务
import axios from 'axios'
//图片懒加载
// import VueLazyload from 'vue-lazyload'
//更改title指令
import './directives/setTitle'
//引入lodash插件（暂使用x-input防抖动）
// import lodash from 'lodash'
//vue-scroller插件 用于上拉加载与下拉刷新
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
    //X、Y轴滚动定位插件（可在需要的页面引入）
    //import BScroll from 'better-scroll'
    //引入拖拽插件
import VueDND from 'awe-dnd'
//引入滑动插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//vuxloading
import { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
    //vuxtoast
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)
    //vue手势事件
var VueTouch = require('vue-touch')
Vue.use(VueTouch, { name: 'v-touch' })
    //拖拽插件
Vue.use(VueDND)
    // //滑动插件
Vue.use(VueAwesomeSwiper)
    // //路由插件
Vue.use(VueRouter)
    //vuex仓库插件
Vue.use(Vuex)
    //引入微信jssdk权限插件
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)
const router = new VueRouter({
        routes
    })
    //全局的 axios 默认值//临时url基础地址
axios.defaults.baseURL = 'http://www.shangjin666.cn:9988/Cloud/';
//axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//全局IP
localStorage.IP = 'http://wx.shangjin666.cn';
localStorage.picIP = 'http://www.shangjin666.cn:9988';
localStorage.core2 = 'http://www.shangjin666.cn:9991/api/';
localStorage.seelistenIP='http://www.shangjin666.cn:9992';
//初始化id
if(sessionStorage.userId==''||sessionStorage.userId==undefined)sessionStorage.userId='undefined';
//绑定属性方法
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
//取消点击延迟（300ms）
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app-box")