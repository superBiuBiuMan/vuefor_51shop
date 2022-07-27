<template>
<div class="shopcart-container">
    <!-- 头部 -->
    <Top></Top>
<div class="box">
	<div class="title">
		<span class="check">选择</span>
		<span class="name">商品信息</span>
		<span class="unitPrice">单价</span>
		<span class="num">数量</span>
		<span class="unitTotalPrice">金额</span>
		<span class="operation">操作</span>
	</div>
	<div>
		<div>
			<div class="main">
				<div class="goods">
					<span class="check">
						<input type="checkbox" checked>
					</span>
					<span class="name">
						<img src="images/oppo.jpg">
						OPPO R15 智能手机 全网通
					</span>
					<span class="unitPrice">599.00</span>
					<span class="num">
						<span class="">-</span>
						2
						<span>+</span>
					</span>
					<span class="unitTotalPrice">1198.00</span>
					<span class="operation">
						<a>删除</a>
					</span>
				</div>
				<div class="goods">
					<span class="check">
						<input type="checkbox" checked>
					</span>
					<span class="name">
						<img src="images/vivo.jpg"> vivo X27 8GB+256GB大内存 </span>
					<span class="unitPrice">699.00</span>
					<span class="num">
						<span class="off">-</span> 1 <span>+</span>
					</span>
					<span class="unitTotalPrice">699.00</span>
					<span class="operation">
						<a>删除</a>
					</span>
				</div>
			</div>
			<div class="info">
				<span>
					<input type="checkbox" checked> 全选</span>
				<a>清空购物车</a>
				<span>已选商品<span class="totalNum">2</span> 件</span>
				<span>合计:<span class="totalPrice">¥1897.00</span>
				</span>
				<span>去结算</span>
			</div>
		</div>
	</div>
	<div>
	</div>
</div>
    <!--底部-->
    <Footer></Footer>
</div>
</template>

<script>
export default {
  name: 'ShopCart',
}
</script>

<style scoped>
@import "./css/style.css";
.empty {
    width: 360px;
    margin: 50px auto;
}

.empty img {
    width: 100px;
}

.empty a {
    color: #0a6999;
    cursor: pointer;
}
</style>
