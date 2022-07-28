<template>
<div class="register-container">
 <!-- 头部 -->
<Top></Top>
<div class="register-container">
    <div class="register">
        <h3>注册新用户
          <span class="go">我有账号，去 <router-link to="/login">登录</router-link>
          </span>
        </h3>
        <div class="content">
          <label>手机号:</label>
          <input 
            type="text"
            placeholder="请输入您的手机号"
            v-model="phone"
            name="phone"
            v-validate="{ required: true, regex: /^1\d{10}$/ }"
            :class="{ invalid: errors.has('phone') }"
          />
          <span class="error-msg">{{errors.first("phone")}}</span>
        </div>
        <div class="content">
          <label>登录密码:</label>
          <input 
            type="text"
            placeholder="请输入您的登录密码"
            v-model="password"
            name="password"
            v-validate="{ required: true, regex: /^\w{6,20}$/ }"
            :class="{ invalid: errors.has('password') }"
          />
          <span class="error-msg">{{errors.first("password")}}</span>

        </div>
        <div class="content">
          <label>确认密码:</label>
          <input 
            type="text"
            placeholder="请输入确认密码"
            v-model="password2"
            name="password2"
            v-validate="{ required: true, is: password }"
            :class="{ invalid: errors.has('password2') }"
          />
          <span class="error-msg">{{errors.first("password2")}}</span>
        </div>
        <div class="controls">
          <input type="checkbox" v-model="isSelected" name="协议" v-validate="'agree'"/>
          <span>我已阅读并同意《51Shop用户协议》</span>
          <span class="error-msg">{{errors.first("协议")}}</span>
        </div>
        <div class="btn">
          <button @click.prevent="register">完成注册</button>
        </div>
    </div>
</div>
<!--底部-->
<Footer></Footer>
</div>
</template>

<script>
export default {
  name: 'Register',
  data(){
    return {
      phone:"",
      password:"",
      password2:"",
      isSelected:true,
    }
  },
  methods:{
    // 单击注册按钮
    async register(){
      const success = await this.$validator.validateAll();//全部表单验证
      if(!success){
        //表单不通过
        return;
      }
      let { phone, password, password2 ,isSelected } = this;
      //判断是否输入完整
      if( phone && password && password2 && password === password2 && isSelected ){
       //进行注册
       try {
          let regResult = await this.$store.dispatch("userRegister",{phone,password});
          //注册成功
          alert(regResult);
          // 登录
          this.$store.dispatch("userLogin",{phone,password});
          //跳转到首页
          this.$router.push({name:"Home"});
       } catch (error) {
          //注册失败
          alert(error);
       }
      }else{
        alert("请输入完整的信息!或者检查是否已经勾选协议条款!");
      }
    }
  }
}
</script>

<style scoped>
.register-container .register {
  width: 1200px;
  height: 445px;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
}
.register-container .register h3 {
  background: #ececec;
  margin: 0;
  padding: 6px 15px;
  color: #333;
  border-bottom: 1px solid #dfdfdf;
  font-size: 20.04px;
  line-height: 30.06px;
}
.register-container .register h3 span {
  font-size: 14px;
  float: right;
}
.register-container .register h3 span a {
  color: #e1251b;
}
.register-container .register div:nth-of-type(1) {
  margin-top: 40px;
}
.register-container .register .content {
  padding-left: 390px;
  margin-bottom: 18px;
  position: relative;
}
.register-container .register .content .codeStyle {
  height: 36px;
}
.register-container .register .content label {
  font-size: 14px;
  width: 96px;
  text-align: right;
  display: inline-block;
}
.register-container .register .content input {
  width: 270px;
  height: 38px;
  padding-left: 8px;
  box-sizing: border-box;
  margin-left: 5px;
  outline: none;
  border: 1px solid #999;
}
.register-container .register .content img {
  vertical-align: sub;
}
.register-container .register .content .error-msg {
  position: absolute;
  top: 100%;
  left: 495px;
  color: red;
}
.register-container .register .controls {
  text-align: center;
  position: relative;
}
.register-container .register .controls input {
  vertical-align: middle;
}
.register-container .register .controls .error-msg {
  position: absolute;
  top: 100%;
  left: 495px;
  color: red;
}
.register-container .register .btn {
  text-align: center;
  line-height: 36px;
  margin: 17px 0 0 55px;
}
.register-container .register .btn button {
  outline: none;
  width: 270px;
  height: 36px;
  background: #e1251b;
  color: #fff !important;
  display: inline-block;
  font-size: 16px;
}
.register-container .copyright {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;
}
.register-container .copyright ul li {
  display: inline-block;
  border-right: 1px solid #e4e4e4;
  padding: 0 20px;
  margin: 15px 0;
}

</style>
