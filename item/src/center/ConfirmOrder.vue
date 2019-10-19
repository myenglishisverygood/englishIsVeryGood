<template>
    <div class="wrap">
      <div class="head_top">
        确认订单
        <router-link :to="{path:'/center'}"><span class="glyphicon glyphicon-menu-left" ></span>
        </router-link>
        <router-link :to="{}" class="cent">
          <img src="./img/gr.png"/>
        </router-link>
      </div>
      <!--收货地址-->
      <router-link :to="{}" class="address_container">
        <div class="left">
          <img src="./img/dz.png" alt="">
          <div>请添加一个收货地址</div>
        </div>
        <div class="right">
          <img src="./img/xz.png" alt="">
        </div>
      </router-link>
      <!--送达时间-->
      <section class="delivery_model">
        <p class="delivery_text">送达时间</p>
        <section class="delivery_time">
          <p>尽快送达 | 预计 20:57</p>
          <p>蜂鸟专送</p>
        </section>
      </section>
      <!--支付方式-->
      <section class="container_style">
        <header class="header_style">
          <span>支付方式</span>
          <div class="more_type">
            <span  @click="showPopup">在线支付  ></span>
          </div>
        </header>
        <section class="hongbao">
          <span>红包</span>
          <span>暂时只在饿了么APP中支持</span>
        </section>

      </section>

      <!--食物列表-->
    <section class="food_list">
      <header>
        <img src="" alt="">
        <span>北京烤鸭</span>
      </header>
      <ul class="food_list_ul">
        <li class="food_item_style">
          <p class="food_name_ellipsis">1233</p>
          <div class="num_price">
            <span>x 1</span>
            <span>￥20</span>
          </div>
        </li>
        <li class="food_item_style">
          <p class="food_name_ellipsis">ab</p>
          <div class="num_price">
            <span>x 1</span>
            <span>￥20</span>
          </div>
        </li>
        <div class="food_item_style">
          <p class="food_name_ellipsis">餐盒</p>
          <div class="num_price">
            <span></span>
            <span>￥12648</span>
          </div>
        </div>
        <div class="food_item_style">
          <p class="food_name_ellipsis">配送费</p>
          <div class="num_price">
            <span></span>
            <span>￥20</span>
          </div>
        </div>
        <div class="food_item_style price">
          <p class="food_name_ellipsis">订单￥134555</p>
          <div class="num_price">
            <span>待支付 ￥134555</span>
          </div>
        </div>
      </ul>
    </section>
      <van-popup v-model="down" position="bottom" :style="{ height: '20%' }">
        <div class="choose_type_Container" v-if="down">
          <header>支付方式</header>
          <ul>
            <li>
              <span>货到付款
              <span>(商家暂不支持货到付款)</span>
              </span>
              <van-radio-group v-model="radio" disabled>
                <van-radio name="2"></van-radio>
              </van-radio-group>
            </li>
            <li class="choose">
              <span>在线支付</span>
              <van-radio-group v-model="radio">
                <van-radio name="1" checked-color="#07c160" @click="down=false"></van-radio>
              </van-radio-group>
            </li>
          </ul>
        </div>
      </van-popup>

      <section class="container_style">
        <router-link :to="{}" class="header_style">
          <span>订单备注</span>
          <div class="more_type">
            <span>口味,偏好等  ></span>
          </div>
        </router-link>
        <router-link :to="{}" class="header_style">
          <span>发票抬头</span>
          <div class="more_type">
            <span>不需要开发票 ></span>
          </div>
        </router-link>
      </section>
      <div class="confirm_order">
        <p>待支付 ￥12334</p>
        <p>确认下单</p>
      </div>
    </div>

</template>

<script>
    export default {
        name: "ConfirmOrder",
      data(){
          return{
            down:false,
            radio:'1'
          }
      },
      methods: {
        showPopup() {
          this.down = true;
        }
      }
    }
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 55rem;
    background: rgb(245,245,245);
    animation: fae .5s;
    -webkit-animation:fae .5s;
    animation-fill-mode: forwards;
  }
  @keyframes  fae{
    0%{
      opacity: 0;
    }
    25%{
      opacity: 0.2;
    }
    50%{
      opacity: 0.5;
    }
    75%{
      opacity: 0.75;
    }
    100%{
      opacity: 1;
    }
  }
  .head_top{
    background: #3190e8;
    width:100%;
    height:2.9rem;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    line-height: 2.55rem;
    color: white;
    font-family: "Microsoft YaHei";
  }
  .glyphicon{
    position: absolute;
    top: 0.7rem;
    left: 0.6rem;
    color: white;
  }
  .cent img{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.7rem;
    right: 0.6rem;
  }
  .address_container{
    min-height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .6rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAGCAYAAACMyr1NAAAAAXNSR0IArs4c6QAAANxJREFUOBFjZICCpoUPWhn+M7rD+OTQjP8ZztQmymfg0/tr95JlDAz/I/GpISTHyMiwj9Ul1hmbOiaQYNfSx6qUegZkDisD01QQjQv837NMD+iYCFzyxIr/Z2asxqWWBSTx49e/LAZGXEqIFP/PcLgiUfYyPtV/GP62/P9PmU3AANnM6hhzApc9TB3zH+sCrbDFpYBYcQ42pmn41P7av8QC6BlffGoIyTEyMv5nYWCuwaeO6TfDv2x8CoiSY/y/syxa9jY+tYx//7fikydGDhggKxhdoi4Ro3bYqAEAknE5DXYMR0IAAAAASUVORK5CYII=) 0 100% repeat-x;
    background-color: #fff;
    background-size: auto .12rem;
    position: relative;
  }
  .left{
    display: flex;
    align-items: center;
  }
  .left img{
    width: 1.5rem;
    height: 1.5rem;
  }
  .right{

   position: absolute;
    top:1.2rem;
  right: 0.4rem;
  }
  .right img{
    width: 1rem;
    height: 1rem;
  }
  .left div{
    color: black;
    font-size: 1rem;
  }
  .delivery_model{
    border-left: .3rem solid #3190e8;
    min-height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin-top: .4rem;
    padding: 0 .7rem;
  }
  .delivery_text{
    font-size: 1.3rem;
    color: #333;
    font-weight: 700;
    padding-left: .3rem;
  }
  .delivery_time{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .delivery_time p:first-of-type{
    font-size: .8rem;
    color: #3190e8;
  }
  .delivery_time p:nth-of-type(2){
    font-size: .7rem;
    color: #fff;
    background-color: #3190e8;
    width: 3.4rem;
    margin-top: .5rem;
    text-align: center;
    border-radius: .12rem;
    padding: .2rem;
  }
  .container_style{
    background-color: #fff;
    margin-top: .4rem;
    padding: 0 .7rem;
  }
  .header_style{
    display: flex;
    justify-content: space-between;
    line-height: 3rem;
    position: relative;
    width: 100%;
  }
  .header_style span:first-of-type{
    font-size: 1rem;
    color: #666;
  }
  .more_type span:first-of-type{
    font-size: .8rem;
    color: #aaa;
    width: 10rem;
    display: inline-block;
    text-align: right;
    vertical-align: middle;
  }
  .container img{
    width: 1rem;
    height: 1rem;
     position: absolute;
     top:0.5rem;
    right: 0.5rem;
  }
  .hongbao{
    display: flex;
    justify-content: space-between;
    border-top: .025rem solid #f5f5f5;
  }
  .hongbao span{
    font-size: .8rem;
    color: #aaa;
    line-height: 2rem;
  }
  .choose_type_Container{
    min-height: 13rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 204;
  }
  .choose_type_Container header{
    background-color: #fafafa;
    font-size: 1rem;
    color: #333;
    text-align: center;
    line-height: 2rem;
  }
  .choose_type_Container ul li{
    display: flex;
    justify-content: space-between;
    padding: 0 .7rem;
    line-height: 2.5rem;
    align-items: center;
  }
  .choose_type_Container ul li span{
    font-size: .9rem;
    color: #ccc;
  }
  ul .choose span{
    color: #333;
  }
  .food_list{
    background-color: #fff;
    margin-top: .4rem;
    font-size: 1.2rem;
  }
  .food_list header{
    padding: .7rem;
    border-bottom: .025rem solid #f5f5f5;
  }
  .food_list ul{
    padding-top: .5rem;
  }
  .food_item_style{
    display: flex;
    justify-content: space-between;
    line-height: 1.8rem;
    padding:0.2rem 2.1rem;
    font-size: 0.9rem;
  }
  .food_name_ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 14rem;

  }
  .num_price{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .num_price span:first-of-type{
    color: #f60;
  }
  .price{
    border-top: .025rem solid #f5f5f5;
  }
.confirm_order{
  display: flex;
  position: fixed;
  bottom: -0.7rem;
  width: 100%;
  height: 3rem;
}
  .confirm_order p:first-of-type{
    background-color: #3c3c3c;
    flex: 5;
    padding-left: .7rem;

  }
  .confirm_order p{
    line-height: 3rem;
    font-size: 1rem;
    color: #fff;
  }
  .confirm_order p:nth-of-type(2){
    flex: 2;
    background-color: #56d176;
    text-align: center;
  }
</style>
