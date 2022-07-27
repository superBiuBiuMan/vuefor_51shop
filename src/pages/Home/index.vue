<template>
  <div>
    <!-- 头部 -->
    <Top></Top>
    <!-- Nav -->
    <Nav></Nav>
    <div id="shopmain" class="shopMain">
      <!-- 推荐 -->
      <Recommend></Recommend>
      <Activity></Activity>
      <Phone></Phone>
      <Computer></Computer>
    </div>
  <!--底部-->
  <Footer></Footer>
  </div>
</template>

<script>
import Nav from "./Nav";
import Recommend from "./Recommend";
import Activity from "./Activity";
import Phone from "./Phone"
import Computer from "./Computer";
export default {
  name: 'Home',
  components:{
    Nav,
    Recommend,
    Activity,
    Phone,
    Computer,
  },
}
</script>

<style lang="less" scoped>

</style>
