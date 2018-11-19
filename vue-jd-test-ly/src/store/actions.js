/**
 * Created by ali on 2018/11/8.
 */

const actions = {
    showtab({commit}) {
        commit('SHOWTAB')
    },
    hidetab({commit}) {
        commit('HIDETAB')
    },
 setUserInfo({commit},userInfo) {

     commit('GETUSER',userInfo)
 }
}

export default actions;