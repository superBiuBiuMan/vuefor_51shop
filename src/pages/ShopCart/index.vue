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
				<!-- 显示用户购物车数据 -->
				<div class="goods" v-for="(shopItem,index) in list" :key="index">
					<!-- 商品选中状态 v-model="checkData"-->
					<span class="check">
						<input
              type="checkbox"
              :value="index"
							v-model="checkData"
              @click="shopItem.isSelect = !shopItem.isSelect"
            />
					</span>
					<!-- 商品名称 -->
					<span class="name">
						<img :src="shopItem.img">
						{{shopItem.name}}
					</span>
					<!-- 商品单价 -->
					<span class="unitPrice">{{shopItem.unitPrice}}</span>
					<!-- 商品数量 -->
					<span class="num">
						<!-- 商品数量减少 -->
						 <span
              :class="{ off: !(shopItem.num != 1) }"
              @click="decrease(index)">-</span>
						{{shopItem.num}}
						<!-- 商品数量增加 -->
						<span class="active" @click="increase(index)">+</span>
					</span>
					<!-- 商品总价 -->
					<span class="unitTotalPrice">{{shopItem.unitPrice * shopItem.num}}</span>
					<span class="operation">
						<a @click="removeItem(index)">删除</a>
					</span>
				</div>
			</div>
			<div class="info">
				<span>
					<label>
						<input type="checkbox" v-model="isSelectAll" @click="checkAll"> 全选
					</label>
					</span>
				<a @click="clearAllShop">清空购物车</a>
				<span>已选商品<span class="totalNum">{{selectAmount}}</span> 件</span>
				<span>合计:<span class="totalPrice">{{totalMoney}}</span>
				</span>
				<span @click="$router.push('/pay')">去结算</span>
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
import { mapActions, mapState } from "vuex";
export default {
  name: 'ShopCart',
	data(){
		return {
			list:[],
			//是否为全选
			isSelectAll: false,
		}
	},
	mounted(){
		//初始化用户购物车数据
		this.list = this.shopCartInfo;
	},
	computed:{
		...mapState(["token","shopCartInfo"]),
		//计算选了几件
    selectAmount() {
      return this.checkData.length;
    },
		//记录选中的项,
		checkData(){
			let tempArray = [];
			this.list.forEach((item,index)=>{
				if(item.isSelect){
					tempArray.push(index);
				}
			});
			return tempArray;
		},
    //计算总金额
    totalMoney() {
      let money = 0;
      this.checkData.forEach((item) => {
        let data = this.list[item];
        if (data.isSelect) {
          money += this.list[item].num * this.list[item].unitPrice;
        }
      });
      return money;
    },
	},
	watch: {
		list:{
			//发生数据改变
			handler(){
				this.update(this.list);
			},
			deep:true,
		},
    checkData: {
      handler() {
        if (this.checkData.length === this.list.length && this.list.length!==0) {
          this.isSelectAll = true;
        } else {
          this.isSelectAll = false;
        }
      },
      deep: true,
    },
  },
  methods: {
		...mapActions(["update"]),
		//清空购物车
		clearAllShop(){
			this.list = [];
			this.checkData = [];
		},
    //移除商品
    removeItem(removeIndex) {
      this.list.splice(removeIndex, 1);
      // this.checkData = [];
      // this.list.forEach((item,index)=>{
      //   if(item.isSelect){
      //     this.checkData.push(index);
      //   }
      // })
    },
    //增加数量
    decrease(changIndex) {
			//商品数量只有1个,则不能操作
			if(this.list[changIndex].num === 1){
				return;
			}
      //变更数量
      this.list.find((item, index) => {
        if (changIndex === index) {
          item.num--;
        }
      });
    },
    //减少数量
    increase(changIndex) {
      //变更数量
      this.list.find((item, index) => {
        if (changIndex === index) {
          item.num++;
        }
      });
    },
    //是否全选
    checkAll() {
      //获取当前的选择状态
      let checkStatus = !this.isSelectAll;
      if (checkStatus) {
        //清空
        this.checkData = [];
        //全选
        this.list.forEach((item, index) => {
          item.isSelect = true;
          this.checkData.push(index);
        });
      } else {
        //全不选
        this.checkData = [];
        this.list.forEach((item, index) => {
          item.isSelect = false;
        });
      }
    },
  },
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
