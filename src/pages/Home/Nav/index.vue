<template>
  <div class="shopNav">
    <div class="slideall">
      <div>
        <div class="long-title"><span class="all-goods">全部分类</span></div>
        <div class="nav-cont">
          <ul>
            <li class="index">
              <a href="javascript:void(0)">首页</a>
            </li>
            <li class="qc">
              <a href="javascript:void(0)">闪购</a>
            </li>
            <li class="qc">
              <a href="javascript:void(0)">生鲜</a>
            </li>
            <li class="qc">
              <a href="javascript:void(0)">团购</a>
            </li>
            <li class="qc last">
              <a href="javascript:void(0)">全球购</a>
            </li>
          </ul>
          <div class="nav-extra">
            <i class="mr-icon-user-secret mr-icon-md nav-user"></i
            ><b></b>我的福利
            <i class="mr-icon-angle-right" style="padding-left: 10px"></i>
          </div>
        </div>
      </div>
      <div class="show">
          <!-- 左侧菜单栏组件-LMenu -->
          <LMenu></LMenu>
          <Banner></Banner>
          <div class="mr-g mr-g-fixed smallnav">
            <div class="mr-u-sm-3">
              <a href="javascript:void(0)"
                ><img src="/images/navsmall.jpg" />
                <div class="title">商品分类</div>
              </a>
            </div>
            <div class="mr-u-sm-3">
              <a href="javascript:void(0)"
                ><img src="/images/huismall.jpg" />
                <div class="title">大聚惠</div>
              </a>
            </div>
            <div class="mr-u-sm-3">
              <a href="javascript:void(0)"
                ><img src="/images/mansmall.jpg" />
                <div class="title">个人中心</div>
              </a>
            </div>
            <div class="mr-u-sm-3">
              <a href="javascript:void(0)"
                ><img src="/images/moneysmall.jpg" />
                <div class="title">投资理财</div>
              </a>
            </div>
          </div>
          <!-- 右侧菜单栏组件-RMenu -->
          <RMenu></RMenu>
          <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LMenu from "./Menu/LMenu";// 左侧菜单
import RMenu from "./Menu/RMenu"//右侧菜单
import Banner from "./Banner";//中间轮播图
//这里还有一个banner
export default {
    name: "Nav",
    components: {
        LMenu,
		    RMenu,
        Banner,
    },
    // props:{
    //   token:String
    // }
};
</script>

<style scoped>
@media screen and (min-width:1024px){
  .show{
    width: 100%;
    height: 100%;
  }
}
</style>
