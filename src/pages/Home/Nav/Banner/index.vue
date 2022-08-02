<template>
<div class="banner" style="position: unset;">
    <div data-mr-flexslider="" id="demo-slider-0" class="mr-slider mr-slider-default scoll clearfix" >
        <div id="box">
            <ul id="imagesUI" class="list">
                <div class="box-content">
                    <li v-for="(item,index) in bannerList" :key="index" v-show="currentIndex === index" >
                        <img :src="item">
                    </li>
                </div>
            </ul>
            <ul id="btnUI" class="count" style="overflow: hidden;" >
                <li :class="{current:currentIndex===index}" v-for="(item,index) in bannerList" :key="index"> {{index+1}} </li>
            </ul>
        </div>
    </div>
    <div class="clear"></div>
</div>
</template>

<script>
export default {
  name: 'Banner',
  data(){
    return {
        currentIndex:0,//当前轮播图索引
        bannerLength:4,//轮播图数量
        // 轮播图
        bannerList:[],//轮播图
    }
  },
  mounted(){
    this.initBanner();
  }, 
  methods:{
    // 轮播图
    initBanner(){
        this.$nextTick(()=>{
            this.bannerList = [
                "/images/banner1.png",
                "/images/banner2.png",
                "/images/banner3.png",
                "/images/banner4.png",
            ];
        })
        setInterval(() => {
            this.currentIndex = (++this.currentIndex)%this.bannerLength;
        }, 3000);
    }
  }
}
</script>

<style  scoped>
/* 渐隐效果 */
/* .fadeSlow{
    animation: fade .5s;
}
@keyframes fade{
    from {
        opacity: 1;
    }
    to{
        opacity: 0;
    }
} */
#box {
    position: relative;
    width: 100%;
    background: #fff;
    border-radius: 5px;
}

.clearfix::before{
    content:"";
    display: table;
    clear: both;
}
#box .list {
    position: relative;
}
.box-content{
    width: 100%;
    height:100%;
}
@media only screen and (min-width: 1450px) {
    #box .list li {
        height: 100%;
        width: 100%;
        margin: auto;
        margin-top: 0px;
        margin-left: -21px;
    }
    #box .count {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 5px;
    }
}

@media screen and (min-width: 800px) and (max-width: 1450px) {
    #box .list li {
        width: 100%;
        height: 100%;
        margin-top: 0px;
        /* position: absolute; */
        top: 0;
        left: -100px;
        bottom: 0;
        right: 0;
    }
    #box .list li img {
        /* width: 120%; */
        width: 100%;
        height: 100%;
    }
    #box .count {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;  
    }
}
/*  */
@media screen and (min-width:800px) and (max-width:1024px) {
    #box .list {
        height: 300px;
    }
    #box .list li {
        /* height: 70%; */
    }
    #box .count{
        /* bottom: 100px; */
        bottom: 10px;
    }
}

@media screen and (min-width:1024px)  {
    .banner{
        height: 100%;
        width: 100%;
    }
    .box-content{
       width: calc(100% - 180px - 220px - 10px - 10px);
       margin: 0 auto;
    }
    #box .list li img {
        /* width: 100%;
        height: 100%; */
        width: 600px;
        height: 340px;
    }
    #demo-slider-0{
        width: 100%;
        height: 100%;
    }
    #box{
        width: 100%;
        height: 100%;
    }
    #imagesUI{
           width: 100%;
        height: 100%;
    }
}

@media screen and (min-width:1280px)  {
       #box .list li img {
        width: 780px;
        height: 438px;
    }
}

@media screen and (max-width: 400px) {
    #box {
        display: none;
    }
}
#btnUI{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

#box .list li.current {
    opacity: 1;
}

#box .count li {
    color: #fff;
    float: left;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    margin-right: 5px;
    overflow: hidden;
    background: #6D6B6A;
    opacity: 0.7;
    border-radius: 20px;
}

#box .count li.current {
    color: #fff;
    opacity: 0.7;
    font-weight: 700;
    background: #f60;
    transition: all .6s ease;
}
/* 设置过渡属性 */

.fade-enter-active,
.fade-leave-active {
    transition: all 1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
