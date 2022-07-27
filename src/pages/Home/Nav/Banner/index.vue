<template>
<div class="banner" style="position: unset;">
    <div data-mr-flexslider="" id="demo-slider-0" class="mr-slider mr-slider-default scoll">
        <div id="box">
            <ul id="imagesUI" class="list">
                <div  class="box-content">
                    <li style=""  ><img src="/images/banner1.png"></li>
                    <li style="display: none;"><img src="/images/banner2.png"></li>
                    <li style="display: none;"><img src="/images/banner3.png"></li>
                    <li style="display: none;"><img src="/images/banner4.png"></li>
                </div>
            </ul>
            <ul id="btnUI" class="count" style="overflow: hidden;">
                <li class="current"> 1 </li>
                <li class=""> 2 </li>
                <li class=""> 3 </li>
                <li class=""> 4 </li>
            </ul>
        </div>
    </div>
    <div class="clear"></div>
</div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style  scoped>
#box {
    position: relative;
    width: 100%;
    background: #fff;
    border-radius: 5px;
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
@media only screen and (max-width: 1260px) {
    #box .list li {
        height: 70%;
    }
    #box .count{
        bottom: 100px;
    }
}
@media screen and (min-width:800px) and (max-width:1024px) {
    #box .list {
        height: 300px;
    }

}
@media screen and (min-width:1024px)  {
    .box-content{
       width: calc(100% - 180px - 220px - 10px - 10px);
       margin: 0 auto;
    }
    #box .list {
        height: 445px;
    }
    #box .list li img {
        width: 100%;
        height: 100%;
    }
}

@media screen and (max-width: 400px) {
    #box {
        display: none;
    }
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
