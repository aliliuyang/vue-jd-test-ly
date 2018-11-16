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





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
