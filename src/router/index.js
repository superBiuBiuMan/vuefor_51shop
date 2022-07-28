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
            beforeEnter(to,from,next){
                // 判断是否已经登录了
                //获取token
                let token = localStorage.getItem("51SHOPTOKEN");
                if(token){
                    // token存在,跳转到首页
                    next("/");
                }else{
                    //放行
                    next();
                }
            }
        },
        {
            // 注册页
            path:"/register",
            name:"Register",
            component:Register,
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
       
    ],
    scrollBehavior(){
        return {x:0,y:0}
    },
});
// 全局前置守卫
router.beforeEach((to,from,next)=>{
    //需要token的页面
    let needToken = ["ShopCart","AddCartSuccess","Pay"];
    if(needToken.includes(to.name)){
        //访问了需要token的页面
        //获取token
        let token = localStorage.getItem("51SHOPTOKEN");
        if(token){
            //token存在 放行
            next();
        }else{
            //跳转到登录
            next(`/login?url=${to.path}`);
        }
    }else{
        next();
    }
});
export default router;