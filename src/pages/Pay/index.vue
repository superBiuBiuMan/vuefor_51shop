<template>

  <div class="pay-container">
    <!-- 头部 -->
    <Top></Top>
    <div class="concent">
    <div class="paycont">
        <div class="address">
            <h3>确认收货地址 </h3>
            <div class="control">
                <div class="tc-btn createAddr theme-login mr-btn mr-btn-danger">使用新地址</div>
            </div>
            <div class="clear"></div>
            <ul>
                <div class="per-border"></div>
                <li class="user-addresslist defaultAddr">
                    <div class="address-left">
                        <div class="user DefaultAddr"><span class="buy-address-detail"><span class="buy-user">李丹 </span><span class="buy-phone">1586699****</span></span>
                        </div>
                        <div class="default-address DefaultAddr"><span class="buy-line-title buy-line-title-type">收货地址：</span><span class="buy--address-detail"><span class="province">吉林</span>省 <span class="city">长春</span>市 <span class="dist">南关区</span>区 <span class="street">卫星广场财富领域5A16室</span></span>
                        </div><ins class="deftip">默认地址</ins></div>
                    <div class="address-right">
                        <a href="javascript:void(0)"><span class="mr-icon-angle-right mr-icon-lg"></span></a>
                    </div>
                    <div class="clear"></div>
                    <div class="new-addr-btn">
                        <a href="javascript:void(0)" class="hidden">设为默认</a><span class="new-addr-bar hidden">|</span>
                        <a href="javascript:void(0)">编辑</a><span class="new-addr-bar">|</span>
                        <a href="javascript:void(0);">删除</a>
                    </div>
                </li>
                <div class="per-border"></div>
                <li class="user-addresslist">
                    <div class="address-left">
                        <div class="user DefaultAddr"><span class="buy-address-detail"><span class="buy-user">李丹 </span><span class="buy-phone">1586699****</span></span>
                        </div>
                        <div class="default-address DefaultAddr"><span class="buy-line-title buy-line-title-type">收货地址：</span><span class="buy--address-detail"><span class="province">吉林</span>省 <span class="city">吉林</span>市 <span class="dist">船营</span>区 <span class="street">东湖路75号众环大厦2栋9层902</span></span>
                        </div><ins class="deftip hidden">默认地址</ins></div>
                    <div class="address-right"><span class="mr-icon-angle-right mr-icon-lg"></span></div>
                    <div class="clear"></div>
                    <div class="new-addr-btn">
                        <a href="javascript:void(0)">设为默认</a><span class="new-addr-bar">|</span>
                        <a href="javascript:void(0)">编辑</a><span class="new-addr-bar">|</span>
                        <a href="javascript:void(0);">删除</a>
                    </div>
                </li>
            </ul>
            <div class="clear"></div>
        </div>
        <div class="logistics">
            <h3>选择物流方式</h3>
            <ul class="op_express_delivery_hot">
                <li data-value="yuantong" class="OP_LOG_BTN  "><i class="c-gap-right" style="background-position: 0px -468px;"></i>圆通<span></span></li>
                <li data-value="shentong" class="OP_LOG_BTN  "><i class="c-gap-right" style="background-position: 0px -1008px;"></i>申通<span></span></li>
                <li data-value="yunda" class="OP_LOG_BTN  "><i class="c-gap-right" style="background-position: 0px -576px;"></i>韵达<span></span></li>
                <li data-value="zhongtong" class="OP_LOG_BTN op_express_delivery_hot_last "><i class="c-gap-right" style="background-position: 0px -324px;"></i>中通<span></span></li>
                <li data-value="shunfeng" class="OP_LOG_BTN  op_express_delivery_hot_bottom"><i class="c-gap-right" style="background-position: 0px -180px;"></i>顺丰<span></span></li>
            </ul>
        </div>
        <div class="logistics">
            <h3>选择支付方式</h3>
            <ul class="pay-list">
                <li class="pay card"><img src="images/wangyin.jpg">银联<span></span></li>
                <li class="pay qq"><img src="images/weizhifu.jpg">微信<span></span></li>
                <li class="pay taobao"><img src="images/zhifubao.jpg">支付宝<span></span></li>
            </ul>
        </div>
        <div>
            <div class="concent">
                <div id="payTable">
                    <h3>确认订单信息</h3>
                    <div class="cart-table-th">
                        <div class="wp">
                            <div class="th th-item">
                                <div class="td-inner">商品信息</div>
                            </div>
                            <div class="th th-price">
                                <div class="td-inner">单价</div>
                            </div>
                            <div class="th th-amount">
                                <div class="td-inner">数量</div>
                            </div>
                            <div class="th th-sum">
                                <div class="td-inner">金额</div>
                            </div>
                            <div class="th th-oplist">
                                <div class="td-inner">配送方式</div>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="main">
                        <div class="goods"><span class="name"><img src="images/oppo.jpg"> OPPO R15 智能手机 全网通 </span><span class="unitPrice">599.00</span><span class="num"> 2 </span><span class="unitTotalPrice">1198.00</span><span class="pay-logis"> 快递送货 </span></div>
                        <div class="goods"><span class="name"><img src="images/vivo.jpg"> vivo X27 8GB+256GB大内存 </span><span class="unitPrice">699.00</span><span class="num"> 1 </span><span class="unitTotalPrice">699.00</span><span class="pay-logis"> 快递送货 </span></div>
                    </div>
                </div>
            </div>
            <div>
                <div class="pay-total">
                    <div class="order-extra">
                        <div class="order-user-info">
                            <div id="holyshit257" class="memo"><label>买家留言：</label><input type="text" title="选填,对本次交易的说明（建议填写已经和卖家达成一致的说明）" placeholder="选填,建议填写和卖家达成一致的说明" class="memo-input J_MakePoint c2c-text-default memo-close">
                                <div class="msg hidden J-msg">
                                    <p class="error">最多输入500个字符</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="buy-agio">
                        <li class="td td-coupon"><span class="coupon-title">优惠券</span>
                            <select data-mr-selected="">
                                <option value="8">
                                    <div class="c-price"><strong>￥8</strong></div>
                                    <div class="c-limit"> 【消费满95元可用】 </div>
                                </option>
                                <option value="3" selected="selected">
                                    <div class="c-price"><strong>￥3</strong></div>
                                    <div class="c-limit"> 【无使用门槛】 </div>
                                </option>
                            </select>
                        </li>
                        <li class="td td-bonus"><span class="bonus-title">红包</span>
                            <select data-mr-selected="">
                                <option value="10.4">
                                    <div class="item-info"> ¥50.00<span>元</span></div>
                                    <div class="item-remainderprice"><span>还剩</span>10.40<span>元</span></div>
                                </option>
                                <option value="50" selected="selected">
                                    <div class="item-info"> ¥50.00<span>元</span></div>
                                    <div class="item-remainderprice"><span>还剩</span>50.00<span>元</span></div>
                                </option>
                            </select>
                        </li>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="buy-point-discharge ">
                    <p class="price g_price "> 合计（含运费） <span>¥</span><em class="pay-sum">1844.00</em></p>
                </div>
                <div class="order-go clearfix">
                    <div class="pay-confirm clearfix">
                        <div class="box">
                            <div tabindex="0" id="holyshit267" class="realPay"><em class="t">实付款：</em><span class="price g_price "><span>¥</span><em id="J_ActualFee" class="style-large-bold-red ">1844.00</em></span>
                            </div>
                            <div id="holyshit268" class="pay-address">
                                <p class="buy-footer-address"><span class="buy-line-title buy-line-title-type">寄送至：</span><span class="buy--address-detail"><span class="province">吉林</span>省 <span class="city">长春</span>市 <span class="dist">南关</span>区 <span class="street">卫星广场财富领域5A16室</span></span>
                                </p>
                                <p class="buy-footer-address"><span class="buy-line-title">收货人：</span><span class="buy-address-detail"><span class="buy-user">李丹 </span><span class="buy-phone">1586699****</span></span>
                                </p>
                            </div>
                        </div>
                        <div id="holyshit269" class="submitOrder">
                            <div class="go-btn-wrap">
                                <a id="J_Go" tabindex="0" title="点击此按钮，提交订单" class="btn-go">提交订单</a>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
    </div>
    <!-- 底部 -->
    <Footer></Footer> 
  </div>

</template>

<script>
export default {
  name: 'Pay',
}
</script>

<style  scoped>
@import url("./css/cartstyle.css");
@import url("./css/jsstyle.css");
@import url("./css/orderstyle.css");

</style>
