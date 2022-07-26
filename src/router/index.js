import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const Home = ()=>import("@/pages/Home");
const Login = ()=>import("@/pages/Login");
const Register = ()=>import("@/pages/Register")
const router = new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            name:"Home",
            component:Home
        },
        {
            path:"/login",
            name:"Login",
            component:Login,
        },
        {
            path:"/register",
            name:"Register",
            component:Register
        }
    ]
});

export default router;