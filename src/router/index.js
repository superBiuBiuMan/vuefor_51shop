import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const Home = ()=>import("@/pages/Home");
const Login = ()=>import("@/pages/Login");
const Register = ()=>import("@/pages/Register");
const ShopCart = ()=>import("@/pages/ShopCart");
const ShopInfo = ()=>import("@/pages/ShopInfo");
const Pay = ()=>import("@/pages/Pay");
const AddCartSuccess = ()=>import("@/pages/AddCartSuccess");
const router = new Router({
    mode:"history",
    routes:[
        {
            // 首页
            path:"/",
            name:"Home",
            component:Home
        },
        {
            // 登录页
            path:"/login",
            name:"Login",
            component:Login,
        },
        {
            // 注册页
            path:"/register",
            name:"Register",
            component:Register
        },
        {
            // 购物车
            path:"/shopcart",
            name:"ShopCart",
            component:ShopCart,
        },
        {
            //添加到购物车成功页
            path:"/addcartsuccess",
            name:"AddCartSuccess",
            component:AddCartSuccess,
        },
        {
            // 商品详情
            path:"/shopinfo",
            name:"ShopInfo",
            component:ShopInfo,
        },
        {
            //订单支付页面
            path:"/pay",
            name:"Pay",
            component:Pay,
        },
       
    ]
});

export default router;