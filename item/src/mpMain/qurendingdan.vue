<template>
  <ul>
    <!--订单顶部-->
    <li class="otop">
      <router-link class="back" :to="{path:''}"><i class="icon-Group- iconfont otopi"></i></router-link>
      <p class="otop-wz">确认订单</p>
    </li>
    <!--添加地址-->
    <li class="address">
      <div>
        <i class="icon-ditu1 iconfont"></i>
        <span class="addiwz">请添加一个收货地址</span>
        <router-link :to="{path:''}"><i class="icon-icon-- iconfont"></i></router-link>
      </div>
    </li>
    <!--送达时间-->
    <li class="ztime">
      <p class="ztime-wz">送达时间</p>
      <div class="stime">尽快送达 | 预计{{shopo.opening_hours[0].split('/')[0]}}</div>
      <span class="bird">{{shopo.delivery_mode.text}}</span>
    </li>
    <!--支付方式-->
    <li class="pay">
      <div class="way">
        <span>支付方式</span>
        <span @click="show=true">在线支付<i class="icon-icon-- iconfont"></i></span>
      </div>
      <div class="redbao">
        <span>红包</span>
        <span>暂时只在饿了么APP中使用</span>
      </div>
    </li>
    <!--支付滑出框-->
    <div class="zfc" v-if="show"  :class="">
      <div class="zfway" v-if="show" :class="show==true?t:f">
        <p class="zfc-wz">支付方式</p>
        <div class="hdfk">
          <span>货到付款(商家不支持货到付款)</span>
          <span><i class="icon-radio-fill iconfont"></i></span>
        </div>
        <div class="zxzf">
          <span>在线支付</span>
          <span @click="show=false"><i class="icon-radio-fill iconfont"></i></span>
        </div>
      </div>
    </div>
    <!--商品详细计算价格-->
    <li class="sum">
      <div class="sbt">
        <img :src="'//elm.cangdu.org/img/' + shopo.image_path" alt="">
        <p class="sbt-wz">{{shopo.name}}</p>
      </div>
      <div class="pros">
        <div>
          <span>餐盒</span>
          <span>￥5</span>
        </div>
        <div>
          <span>配送费</span>
          <span>￥5</span>
        </div>
      </div>
      <div class="totalp">
        <div>
          <span>订单￥10</span>
          <span>待支付</span>
          <div>￥10</div>
        </div>
      </div>
    </li>
    <!--订单备注-->
    <li class="remarks">
      <router-link :to="{path:''}">
        <span>订单备注</span>
        <span>{{remark}}</span>
      </router-link>
      <router-link :to="{path:''}">
        <span>发票抬头</span>
        <span>不需要开发票 ></span>
      </router-link>
    </li>
    <!--支付money-->
    <li class="footer">
      <span>待支付 ￥10</span>
      <router-link :to="{path:''}">确认下单</router-link>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "qurendingdan",
      data(){
        return{
          id:1,
          shopo:{},
          show:false,
          t:'animated slideInUp .5s linear',
          f:'animated slideOutDown .5s linear',
          latitude:'',
          longitude:'',
          remark:'口味、偏好等 >'
        }
      },
      created(){

        this.axios.get('https://elm.cangdu.org/shopping/restaurant/'+this.id).then((result)=>{
          this.shopo = result.data;
          // console.log(this.id);
          console.log(this.shopo);
        });
      },
      updated(){
        if(true){
          this.remark = '口味、偏好等 >'
        }else {
          //   获取订单备注中的内容
        }
      }
    };
    // 屏幕自适应
    (function (doc, win) {
      var docEl = win.document.documentElement;
      var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
      var refreshRem = function () {
        var clientWidth = win.innerWidth
          || doc.documentElement.clientWidth
          || doc.body.clientWidth;

        console.log(clientWidth)
        if (!clientWidth) return;
        var fz;
        var width = clientWidth;
        fz = 16 * width / 375;
        docEl.style.fontSize = fz + 'px';
      };

      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, refreshRem, false);
      doc.addEventListener('DOMContentLoaded', refreshRem, false);
      refreshRem();

    })(document, window);
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1451811_w5ba6ysrei.css";
  *{
    text-decoration: none;
    list-style: none;
  }
  ul{
    width: 100%;
    height: 100%;
    font-size: 16px;

  }
  .otop{
    background: #3190e8;
    color: white;
    position: relative;
    height: 2.5rem;
  }
  .otopi{
    text-decoration: none;
    font-size: 1rem;
  }
  .back{
    position: absolute;
    left: 0;
    top: 0.2rem;
    display: inline-block;
    color: white;
    text-decoration: none;
  }
  .icon-Group-{
    font-size: 1.5rem;
  }
  .otop-wz{
    position: absolute;
    top: .3rem;
    left: 38%;
    font-size: 1.5rem;
  }
  .addiwz{
    font-size: 0.8rem;
  }
  .login{
    position: absolute;
    right: 0.5rem;
    top: .5rem;
    font-size: .8rem;
  }
  .login a{
    color: white;
    display: inline-block;
  }
  .ztime-wz{
    padding-top: 0.5rem;
    font-size: 1.8rem;
  }
  .address{
    background: white;
    border-bottom: dashed 0.1rem deepskyblue;
    padding: 1rem;
  }
  .address a{
    display: inline-block;
    float: right;
    text-decoration: none;
  }
  .icon-icon--{
    font-size: 1.5rem;
  }
  .icon-ditu1{
    color: deepskyblue;
    font-size: 1.1rem;
  }
  .bird{
    background: #57A9FF;
    color: white;
    border-radius: 3px;
    padding: 0.1rem 0.2rem;
    font-size: .6rem;
    position: absolute;
    right: 1rem;
    top: 2.4rem;
  }
  .ztime{
    padding: 1rem 0 2rem 1rem;
    background: white;
    margin-top: .6rem;
    border-left: 0.2rem solid deepskyblue;
    position: relative;
  }
  .stime{
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: #57A9FF;
    font-size: .8rem;
  }
  .pay{
    background: white;
    margin-top: .6rem;
  }
  .way{
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    overflow: hidden;
  }
  .way span:nth-child(1){
    float: left;
    font-size: .9rem;
  }
  .way span:nth-child(2){
    display: inline-block;
    float: right;
    font-size: .8rem;
    color: #999;
  }
  .way span:nth-child(2) .icon-icon--{
    font-size: 1rem;
    text-decoration: none;
  }
  .redbao{
    padding: .5rem 1rem;
    overflow: hidden;
    font-size: .8rem;
    color: #999;
  }
  .redbao span:nth-child(1){
    float: left;
  }
  .redbao span:nth-child(2){
    float: right;
  }
  .zfc{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    z-index: 1000;
    font-size: 1rem;
  }
  .zfc-wz{
    font-size: 1rem;
    margin-left: 9rem;
  }
  .zfway{
    background: white;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 3rem;
  }

  .hdfk{
    padding: 0.5rem 1rem;
    overflow: hidden;
  }
  .hdfk span:nth-child(1){
    float: left;
    font-size: .8rem;
  }
  .hdfk span:nth-child(2){
    float: right;
    font-size: 1rem;
    color: #999;
  }
  .zxzf{
    padding: 0.5rem 1rem;
    overflow: hidden;
  }
  .zxzf span:nth-child(1){
    float: left;
    font-size: .8rem;
  }
  .zxzf span:nth-child(2){
    float: right;
    font-size: 1rem;
    color: #4cd964;
  }
  .iconfont{
    font-size: 1rem;
  }
  .sum{
    padding: .7rem 1rem;
    background: white;
    margin-top: .7rem;
  }
  .sum .sbt{
    position: relative;
    padding-bottom: .5rem;
    border-bottom: 0.05rem solid rgba(0,0,0,0.1);
  }
  .sum img{
    width: 3rem;
    height: 3rem;
  }
  .sbt-wz{
    margin-top: 0.5rem;
    font-size: 1rem;
  }
  .sum .pros{
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 0.8rem;
  }
  .sum .pros div{
    margin: .5rem 0;
  }
  .sum .pros div span:nth-child(2){
    float: right;
  }
  .totalp div{
    margin-top: .5rem;
    position: relative;
    font-size: 0.8rem;
  }
  .totalp div span:nth-child(2){
    float: right;
    color: orangered;
    margin-right: 1rem;
  }
  .totalp div>div{
    margin-left: 18rem;
    color: orangered;
  }
  .remarks{
    padding: 0 1rem;
    background: white;
    margin-top: .7rem;
    margin-bottom: 3.5rem;
    font-size: 0.8rem;
  }
  .remarks a{
    display: block;
    color: #999;
    padding: .5rem 0;
    text-decoration: none;
  }
  .remarks a:nth-child(1){
    border-bottom: 0.05rem solid rgba(0,0,0,0.1);
    text-decoration: none;
  }
  .remarks a span:nth-child(2){
    float: right;
    font-size: .8rem;
    margin-top: .2rem;
    text-decoration: none;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: .5rem 1rem;
    background: #333;
    color: white;
    box-sizing: border-box;
    height: 2.5rem;
    font-size: 1rem;
  }
  .footer a{
    display: inline-block;
    position: fixed;
    right: 0;
    bottom: 0;
    background: #56d176;
    padding: .55rem 1rem;
    color: white;
    text-decoration: none;
    list-style: none;
  }
  .remarks a:nth-child(1) span:nth-child(2){
    width: 5.7rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
