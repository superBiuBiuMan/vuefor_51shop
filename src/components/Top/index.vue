<template>
  <div  class="hmtop">
			<div  class="mr-container header">
				<ul  class="message-l">
					<div  class="topMessage">
						<div  class="menu-hd"><span  style="color: green;">mr，欢迎您 <a  style="color: red;">退出登录</a></span>
							<a  target="_top" style="color: red; margin-left: 20px;">免费注册</a>
						</div>
					</div>
				</ul>
				<ul  class="message-r">
					<div  class="topMessage home">
						<div  class="menu-hd">
							<a  target="_top" class="h" style="color: red;">商城首页</a>
						</div>
					</div>
					<div  class="topMessage my-shangcheng">
						<div  class="menu-hd MyShangcheng">
							<a  href="#" target="_top"><i  class="mr-icon-user mr-icon-fw"></i>个人中心</a>
						</div>
					</div>
					<div  class="topMessage mini-cart">
						<div  class="menu-hd">
							<a  id="mc-menu-hd" target="_top"><i  class="mr-icon-shopping-cart  mr-icon-fw"></i><span  style="color: red;">购物车</span><strong  id="J_MiniCartNum" class="h">2</strong></a>
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
					<li ><img  src="/images/logobig.png"></li>
				</div>
				<div  class="search-bar pr">
					<form ><input  id="searchInput" name="index_none_header_sysc" type="text" placeholder="搜索" autocomplete="off"><input  id="ai-topsearch" value="搜索" index="1" type="submit" class="submit mr-btn"></form>
				</div>
			</div>
			<div  class="clear"></div>
		</div>
</template>

<script>
export default {
  name: 'Top',
}
</script>

<style>
.hmtop{
	
}
</style>
