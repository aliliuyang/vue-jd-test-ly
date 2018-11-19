/**
 * Created by ali on 2018/11/8.
 */

import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex);
const state = {
    isShowTab:true,//底部tab
    userInfo:'',//用户信息
    isLogin:false
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions

})
export default store;