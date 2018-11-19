/**
 * Created by ali on 2018/10/18.
 */
import Home from './components/Home'
import Category from './components/Category'
import Detail from './components/Detail'
import Cart from './components/Cart'
import Register from './components/Register'
import Login from './components/Login'
import Mine from './components/Mine'

export default [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/category',
        name: 'category',
        component: Category
    },
    {
        path: '/category/:id',
        component: Category
    },
    {
        path:'/detail/:id',
        component: Detail
    },
    {
        path:'/cart',
        component: Cart
    },
    {
        path:'/register',
        component: Register
    },
    {
        path:'/login',
        component: Login
    },
    {
        path:'/mine',
        component: Mine
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '*',
        redirect: '/home'
    },

]
