<template>
 <div class="mr-container activity ">
        <div class="shopTitle ">
            <h4>活动</h4>
            <h3>每期活动 优惠享不停 </h3><span class="more "><a href="javascript:void(0)">全部活动<i class="mr-icon-angle-right" style="padding-left: 10px;"></i></a></span></div>
        <div class="mr-g mr-g-fixed ">
            <div class="mr-u-sm-3 " v-for="(item,index) in activityShop" :key="index" @click="$router.push('/shopinfo')">
                <div class="icon-sale one "></div>
                <h4>{{item.h4}}</h4>
                <div class="activityMain ">
                    <a href="javascript:void(0)"><img :src="item.img"></a>
                </div>
                <div class="info ">
                    <h3><a href="javascript:void(0)">{{item.info}}</a></h3></div>
            </div>
        </div>
</div>
</template>

<script>
export default {
  name: 'Activity',
  data(){
    return {
        // 活动商品
        activityShop:[
            {
                h4:"秒杀",
                img:"/images/activity1.jpg",
                info:"春节送礼优选"
            },
            {
                h4:"特惠",
                img:"/images/activity2.jpg",
                info:"蔬果家家必备"
            },
            {
                h4:"团购",
                img:"/images/activity3.jpg",
                info:"吃货必备"
            }, 
            {
                h4:"超值",
                img:"/images/activity.jpg",
                info:"不来点零食犒劳犒劳?"
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
.info a{
    margin-left: unset;
}
</style>
