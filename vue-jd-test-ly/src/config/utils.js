/**
 * Created by ali on 2018/11/13.
 */

/**
 *  存储localStorage
 *
 */

 export const setStore = (name, content) => {
    if(!name) return;
    if(typeof content !== 'string'){
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name,content)
}