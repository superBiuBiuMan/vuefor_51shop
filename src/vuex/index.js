import Vue from "vue";
import Vuex from "vuex";
import {getUserToken,secretPassword,getAllUserList,unLockPassword} from "@/utils/userLoginToken";
// 主页初始化数据
import indexData from "./data/index";
Vue.use(Vuex);

const state = {
    // 主页数据
    indexData,
    //用户登录信息
    token:getUserToken(),
    //已经注册的用户信息
    registerUserList:getAllUserList(),
}
const mutations = {
    LOGINOUT(state){
        state.token = "";
        localStorage.removeItem("51SHOPTOKEN");
    },
    CHANGETOKEN(state,phone){
        //vuex存储当前token
        state.token = phone;
        //存储token(手机号)
        localStorage.setItem("51SHOPTOKEN",phone);
    },
    REGISTER(state,info){
        state.registerUserList.push(info);
        //存入本地
        localStorage.setItem("51SHOPALLTOKEN",JSON.stringify(state.registerUserList));
    }
}
const actions = {
    //登出
    userLoginOut({commit}){
        commit("LOGINOUT");
    },
    //用户登录
    userLogin({commit,state},loginInfo){
        let {password,phone} = loginInfo;//解构获取登录信息
        let result = state.registerUserList.some(item=>{
            return item.phone === phone && unLockPassword(item.password) === password;
        });
        if(result){
            //登录成功
            commit("CHANGETOKEN",phone);
            return Promise.resolve("登录成功!");
        }else{
            //登录失败
            return Promise.reject("登录失败,请检查账号或密码是否有误!");
        }
    },
    //用户注册
    userRegister({commit,state},info){
        let {phone,password} = info;//解构获取注册信息
        //寻找是否已有用户名(手机号)
        let result = state.registerUserList.some(item=>item.phone === phone);
        if(!result){
            //不存在同名用户,则加密后存入
            password = secretPassword(password);
            commit("REGISTER",{phone,password});
            return Promise.resolve("注册成功!");
        }else{
            return Promise.reject("注册失败!,已有相同的用户名!");
        }
    }
}
const getters = {

}
const store = new Vuex.Store({
    state,mutations,
    actions,getters,
});

export default store;