/**
 * Created by ali on 2018/11/8.
 */
export const SHOWTAB = 'SHOWTAB';
export const HIDETAB = 'HIDETAB';
export const GETUSER = 'GETUSER';

const mutations = {
    [SHOWTAB] (state) {

        state.isShowTab = true;
    },
    [HIDETAB] (state) {
        console.log(state)
       state.isShowTab = false;
    },
     [GETUSER] (state,userInfo) {
         state.userInfo = userInfo
     }
}

export default mutations;