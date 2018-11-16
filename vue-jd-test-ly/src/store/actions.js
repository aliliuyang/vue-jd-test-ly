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
 getUserIfo({commit,userInfo}) {
     commit('GETUSER',userInfo)
 }
}

export default actions;