// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config'
import axios from 'axios'
// import qs from 'qs'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
   import './assets/remjs/Flexble'
   import './assets/css/reset.css'
   import './assets/css/mixin.css'
import VueLazyload from 'vue-lazyload'
import store from './store/store'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/err.png'),
  loading: require('./assets/images/loading.gif'),
  attempt: 1,
  listenEvents: ['scroll']
});
Vue.use(MintUI)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3333/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.prototype.$http = axios;


const router = new VueRouter({
  mode: "history",
  scorllBehavior: () => ({
    y:0
  }),
  routes
});
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

//登录验证,需要登录的就跳转至登录页
router.beforeEach((to, from ,next) => {
    // console.log(window.localStorage.getItem('userInfo'))

        if(to.path.indexOf('/login')&&to.path.indexOf('/home') == -1){//返回-1说明没有查到login
            if(window.localStorage.getItem('userInfo') == ''){//跳转到其他页的时候，查看是否有用户信息，有则跳转，否则从新登陆
                next({
                    path:'/login'
                })
            }else{
                next()
            }
        }else{
            next()
        }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
