<template>
  <div>
    <!-- 头部 -->
    <Top></Top>
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
          <ul class="tab clearFix">
            <li>
              <a href="##" style="border-right: 0;">扫描登录</a>
            </li>
            <li>
              <a href="##" class="current">账户登录</a>
            </li>
          </ul>

          <div class="content">
            <form action="##">
              <div class="input-text clearFix">
                <span></span>
                <!-- <input type="text" placeholder="邮箱/用户名/手机号" v-model="phone"> -->
                <input type="text" placeholder="手机号" v-model="phone" name="phone"
                  v-validate="{required: true,regex:/^1\d{10}$/}" :class="{invalid:errors.has('phone')}">
                <div class="error-msg">{{errors.first("phone")}}</div>
              </div>
              <div class="input-text clearFix">
                <span class="pwd"></span>
                <!-- <input type="text" placeholder="请输入密码" v-model="password"> -->
                <input type="password" autocomplete placeholder="请输入密码" v-model="password"
                 name="密码" v-validate="{required:true,min:6}" :class="{invalid:errors.has('密码')}">
                 <div class="error-msg">{{errors.first("密码")}}</div>
              </div>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" >
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <button class="btn" @click.prevent="login">登&nbsp;&nbsp;录</button>
            </form>

            <div class="call clearFix">
              <ul>
                <li><img src="./images/qq.png" alt=""></li>
                <li><img src="./images/sina.png" alt=""></li>
                <li><img src="./images/ali.png" alt=""></li>
                <li><img src="./images/weixin.png" alt=""></li>
              </ul>
              <router-link class="register" to="/register">立即注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <Footer></Footer>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return {
        phone:"",
        password:"",
        //来自哪里的url,当登录成功后跳转
        url:"",
    }
  },
  mounted(){
    //存在就跳转到之前页面,否则跳转到首页
    this.url = this.$route.query.url ? this.$route.query.url :"/";
  },
  methods:{
     // 登录
      async login(){
        let success = await this.$validator.validateAll();
        if(!success){
          //未通过表单验证
          return;
        }
        let { phone,password} = this;
        if(phone && password){
          try {
            let result = await this.$store.dispatch("userLogin",{phone,password});
            alert(result);
            // 跳转到之前进来的页面
            this.$router.push(this.url);
          } catch (error) {
              alert(error);
          }
        } 
      }
  }
}
</script>

<style scoped>
.login-wrap {
  height: 477px;
  background-color: #e93854;
}
.login-wrap .login {
  width: 1200px;
  height: 477px;
  margin: 0 auto;
  background: url("/public/images/big.png") no-repeat;
}
.login-wrap .loginform {
  width: 420px;
  height: 406px;
  box-sizing: border-box;
  background: #fff;
  float: right;
  top: 45px;
  position: relative;
  padding: 20px;
}
.login-wrap .loginform .tab li {
  width: 50%;
  float: left;
  text-align: center;
}
.login-wrap .loginform .tab li a {
  width: 100%;
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  border: 1px solid #ddd;
  box-sizing: border-box;
  text-decoration: none;
}
.login-wrap .loginform .tab li .current {
  border-bottom: none;
  border-top-color: #28a3ef;
  color: #e1251b;
}
.login-wrap .loginform .content {
  width: 380px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: none;
  padding: 18px;
}
.login-wrap .loginform .content .error-msg {
  color: red;
}
.login-wrap .loginform .content form {
  margin: 15px 0 18px 0;
  font-size: 12px;
  line-height: 18px;
}
.clearFix::after{
	content:"";
	display: block;
	clear:both;
}
.login-wrap .loginform .content form .input-text {
  margin-bottom: 16px;
}
.login-wrap .loginform .content form .input-text span {
  float: left;
  width: 37px;
  height: 32px;
  border: 1px solid #ccc;
  background: url('@/assets/image/icons.png') no-repeat -10px -201px;
  box-sizing: border-box;
  border-radius: 2px 0 0 2px;
}
.login-wrap .loginform .content form .input-text .pwd {
  background-position: -72px -201px;
}
.login-wrap .loginform .content form .input-text input {
  width: 302px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-left: none;
  float: left;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 14px;
  line-height: 22px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 0 2px 2px 0;
  outline: none;
}
.login-wrap .loginform .content form .setting label {
  float: left;
}
.login-wrap .loginform .content form .setting .forget {
  float: right;
}
.login-wrap .loginform .content form .btn {
  background-color: #e1251b;
  padding: 6px;
  border-radius: 0;
  font-size: 16px;
  font-family: 微软雅黑;
  word-spacing: 4px;
  border: 1px solid #e1251b;
  color: #fff;
  width: 100%;
  height: 36px;
  margin-top: 25px;
  outline: none;
}
.login-wrap .loginform .content .call {
  margin-top: 30px;
}
.login-wrap .loginform .content .call ul {
  float: left;
}
.login-wrap .loginform .content .call ul li {
  float: left;
  margin-right: 5px;
}
.login-wrap .loginform .content .call .register {
  float: right;
  font-size: 15px;
  line-height: 38px;
}
.login-wrap .loginform .content .call .register:hover {
  color: #4cb9fc;
  text-decoration: underline;
}
.copyright {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;
}
.copyright ul li {
  display: inline-block;
  border-right: 1px solid #e4e4e4;
  padding: 0 20px;
  margin: 15px 0;
}

</style>
