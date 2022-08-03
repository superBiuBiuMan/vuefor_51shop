import Vue from "vue";
import Vuex from "vuex";
import {getUserToken,secretPassword,getAllUserList,unLockPassword} from "@/utils/userLoginToken";
import {storageUserShopCart} from "@/utils/shopCart"
import {getUserCartList} from "@/utils/shopCart";
Vue.use(Vuex);

const state = {
    //用户登录信息
    token:getUserToken(),
    //已经注册的用户信息
    registerUserList:getAllUserList(),
    //购物车数据 - 只有在登录后才有
    shopCartInfo:getUserCartList(getUserToken()),
}
const mutations = {
    // 购物车数据发生改变
    UPDATECARTLIST(state,value){
        // 更新vuex
        state.shopCartInfo = value;
        // 更新localStorage
        storageUserShopCart(state.token,value);
    },
    // 添加购物车
    OPERATIONCART(state,valueObj){
        if(valueObj.isIncrease){
            //为数量增加
            let {index,num} = valueObj;
            state.shopCartInfo[index].num +=(num);
        }else{
            //为增加一项商品
            let {info} = valueObj;//解构出要添加的信息
            state.shopCartInfo.push(info); //添加到数据
        }
        //处理localStorage
        storageUserShopCart(state.token,state.shopCartInfo);
    },
    // 登出
    LOGINOUT(state){
        state.token = "";
        state.shopCartInfo=[];
        localStorage.removeItem("51SHOPTOKEN");
    },
    // 更新token
    CHANGETOKEN(state,phone){
        //vuex存储当前token
        state.token = phone;
        //存储token(手机号)
        localStorage.setItem("51SHOPTOKEN",phone);
    },
    // 注册
    REGISTER(state,info){
        state.registerUserList.push(info);
        //存入本地
        localStorage.setItem("51SHOPALLTOKEN",JSON.stringify(state.registerUserList));
    }
}
const actions = {
    //更新购物车数据
    update({commit},list){
        commit("UPDATECARTLIST",list);
    },
    //添加到购物车
    toCart({commit,state},info){
        let {img,name,num,unitPrice} = info;
        //1.如果原来有商品,那么数量相加
        // let result = state.shopCartInfo.find((item,index)=>item.name === name);
        let resultIndex = state.shopCartInfo.findIndex(item=>item.name === name);
        if(resultIndex!==-1){
            //不为空,原来有商品,那么数量相加
            commit("OPERATIONCART",{
                isIncrease:true,
                num,
                index:resultIndex,
            });
        }else{
            //2.如果原来没有商品,那么新增
            commit("OPERATIONCART",{
                isIncrease:false,
                info:{
                    img,
                    isSelect:true,
                    name,
                    num,
                    unitPrice,
                }
            })
        }
    },
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
    // 购物车数量
    cartCount(state){
        return state.shopCartInfo.length;
    }
}
const store = new Vuex.Store({
    state,mutations,
    actions,getters,
});


export default store;