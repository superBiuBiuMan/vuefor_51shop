<template>
  <!-- 左侧菜单 -->
   <div id="nav" class="navfull">
          <div class="area clearfix">
            <div id="guide_2" class="category-content">
              <div class="category">
                <ul id="js_climit_li" class="category-list" @mouseleave="currentCategory=-1">
                  <li class="appliance js_toggle relative" v-for="(category1,index1) in indexData" :key="index1">
                    <!-- 一级分类列表 -->
                    <div class="category-info" @mouseenter="handleCategoryShow(index1,$event)" >
                      <h3 class="category-name b-category-name">
                        <i><img src="/images/cake.png" /></i>
                        <a :title="category1.bigtype" class="ml-22">{{category1.bigtype}}</a>
                      </h3>
                      <em>&gt;</em>
                    </div>
                    <!-- 二级分类 -->
                    <div class="menu-item menu-in top" :class="{active:currentCategory===index1}">
                      <div class="area-in">
                        <div class="area-bg">
                          <div class="menu-srot">
                            <div class="sort-side">
                              <dl class="dl-sort" v-for="(category2,index2) in category1.smalltype" :key="index2">
                                <dt><span>{{category2.name}}</span></dt>
                                <dd v-for="(catrgory3,index3) in category2.goods" :key="index3">
                                  <a href="javascript:void(0)"><span>{{catrgory3}}</span></a>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <b class="arrow"></b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
   </div>
</template>

<script>
import indexData from "@/assets/data/index"
export default {
  name: 'LMenu',
  data(){
    return {
      indexData,
      currentCategory:-1,//目前的所处的分类列表索引
    }
  }, 
  methods:{
    //处理二级分类列表的显示/隐藏
    handleCategoryShow(i,evnet){
      this.currentCategory = i;
    }
  }
}
</script>

<style scoped>
.category-content .menu-in.active{
  display: block
}
</style>
