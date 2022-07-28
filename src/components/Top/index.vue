<template>
  <div  class="hmtop">
			<div  class="mr-container header">
				<ul  class="message-l">
					<div  class="topMessage">
						<div  class="menu-hd">
							<span v-if="token" style="color: green;">{{token}}，欢迎您的到来<a  style="color: red;cursor:pointer;margin-left: 20px;" @click="loginOut">退出登录</a></span>
							<router-link v-else :to="{name:'Register'}" style="color: red; margin-left: 20px;">免费注册</router-link>
						</div>
					</div>
				</ul>
				<ul  class="message-r">
					<div  class="topMessage home">
						<div  class="menu-hd">
							<router-link :to="{name:'Home'}" class="h" style="color: red;">商城首页</router-link>
						</div>
					</div>
					<div  class="topMessage my-shangcheng">
						<div  class="menu-hd MyShangcheng">
							<a  href="#" target="_top"><i  class="mr-icon-user mr-icon-fw"></i>个人中心</a>
						</div>
					</div>
					<div  class="topMessage mini-cart">
						<div  class="menu-hd">
							<router-link :to="{name:'ShopCart'}" id="mc-menu-hd" ><i  class="mr-icon-shopping-cart  mr-icon-fw"></i>
							<span  style="color: red;">购物车</span>
							<strong  id="J_MiniCartNum" class="h" v-if="!!token">{{cartCount}}</strong></router-link>
						</div>
					</div>
					<div  class="topMessage favorite">
						<div  class="menu-hd">
							<a  href="#" target="_top"><i  class="mr-icon-heart mr-icon-fw"></i><span >收藏夹</span></a>
						</div>
					</div>
				</ul>
			</div>
			<div  class="nav white">
				<div  class="logo">
					<a ><img  src="/images/logo.png"></a>
				</div>
				<div  class="logoBig">
					<li ><router-link :to="{name:'Home'}"><img  src="/images/logobig.png"></router-link></li>
				</div>
				<div  class="search-bar pr">
					<form ><input  id="searchInput" name="index_none_header_sysc" type="text" placeholder="搜索" autocomplete="off"><input  id="ai-topsearch" value="搜索" index="1" type="submit" class="submit mr-btn"></form>
				</div>
			</div>
			<div  class="clear"></div>
		</div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  name: 'Top',
  computed:{
    ...mapState(["token"]),
		...mapGetters(["cartCount"]),
  },
  methods:{
	//登出
	loginOut(){
		this.$store.dispatch("userLoginOut");
		alert("退出登录成功");
	}
  }
}
</script>

<style>
</style>
