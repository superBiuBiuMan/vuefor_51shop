<template>
    <div class="mr-g mr-g-fixed recommendation">
        <div class="clock mr-u-sm-3"><img src="/images/2016.png">
            <p>今日<br>推荐</p>
        </div>
        <div class="mr-u-sm-4 mr-u-lg-3 " v-for="(item,index) in recommendInfo" :key="index" @click="$router.push('/shopinfo')">
            <div class="info" >
                <h3>{{item.h3}}</h3>
                <h4>{{item.h4}}</h4></div>
            <div class="recommendationMain one">
                <a href="javascript:void(0)"><img :src="item.img"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Recommend',
  data(){
    return {
        recommendInfo:[
            {
                h3:"真的有鱼",
                h4:"开年福利篇",
                img:"/images/tj.png"
            },
            {
                h3:"囤货过冬",
                h4:"让爱早回家",
                img:"/images/tj1.png"
            },
            {
                h3:"浪漫情人节",
                h4:"甜甜蜜蜜",
                img:"/images/tj2.png"
            }
        ]
    }
  },
}
</script>

<style scoped>
.info{
    background-color: unset;
}

</style>
