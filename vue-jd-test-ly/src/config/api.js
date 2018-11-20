/**
 * Created by ali on 2018/11/14.
 */
import {post,get} from './axios';

//register
export const goToRegister = (params) => post('/reg',params);

//login
export const goToLogin = (params) => post('/login',params);

// get home main data
export const getHomeMainData = () => get('/home');

//get detail data
export const getDetailData = (params) => get('/detail',params);

//get detail left data

export const getDetailLeftData = () => get('/category');

//get detail right data

export const getDetailRightData = (params) => get('/categorygoods',params);

//upload img
export const uploadImg = (params) => post('/userimg',params);

