<template>
    <div id="VipCenter">
      <div class="title">
        <img src="./img/箭头.png" alt="" @click="leave">
        <span>会员中心</span>
      </div>

      <div id="forUser">
        <div>为账户<span id="username">{{username}}</span>购买会员</div>
      </div>

      <div class="special">
        <router-link :to="{}" class="vipSpecial">
          <span>会员特权</span>
          <div>
            <span>{{vipdes}}</span>
            <span class="glyphicon glyphicon-menu-right"></span>
          </div>
        </router-link>
        <div class="sheng">
          <img src="./img/sheng.jpeg" alt="">
          <div class="msg">
            <div>减免配送费</div>
            <div>每月减免30单，每日可减免3单，每单最高减4元</div>
            <div>蜂鸟专送专享</div>
          </div>
        </div>
        <div class="sheng">
          <img src="./img/jifen.jpeg" alt="">
          <div class="msg">
            <div>减免配送费</div>
            <div>每月减免30单，每日可减免3单，每单最高减4元</div>
            <div>蜂鸟专送专享</div>
          </div>
        </div>
      </div>

      <div class="opening">
        <div class="openingVip">开通会员</div>
        <div style="overflow:hidden">
          <div class="price">
            <span>1个月</span>
            <span>￥20</span>
          </div>
          <div class="buy">购买</div>
        </div>
      </div>

      <div class="exchangeVip">
        <router-link :to="{path:'/exvip'}">
          <div>
            <span>兑换会员</span>
          </div>
          <div>
            <span>使用卡号卡密</span>
            <span class="glyphicon glyphicon-menu-right"></span>
          </div>
          <div class="qf"></div>
        </router-link>
      </div>

      <div class="exchangeVip">
        <router-link :to="{}" style="overflow: hidden">
          <div>
            <span>购买记录</span>
          </div>
          <div>
            <span>开发票</span>
            <span class="glyphicon glyphicon-menu-right"></span>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
      name: "VipCenter",
      data(){
        return{
          username:"",
          vipdes:"会员说明"
        }
      },
      methods:{
        leave(){
          this.$router.push({path:'/home/center'})
        },
      },
      created(){
        this.axios.get("https://elm.cangdu.org/v1/user").then((res)=>{
          this.username = res.data.username
        })
      }
    }
</script>

<style scoped>
  #VipCenter{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
  .title{
    width: 100%;
    background: rgb(49,144,232);
    height: 2.7rem;
    text-align: center;
    line-height: 2.7rem;
    font-size: 1.2rem;
    color: white;
    font-weight: 700;
  }
  .title>img{
    height: 1.6rem;
    width: 1.8rem;
    position: relative;
    right: 8rem;
  }
  #forUser{
    margin-top: 0.8rem;
    margin-left: 0.8rem;
    font-size: 0.85rem;
  }
  #username{
    font-weight: bold;
    margin: 0 0.3rem;
  }
  .special{
    width: 100%;
    height: 33.5%;
    background: white;
    margin-top: 0.8rem;
  }
  .vipSpecial{
    display: block;
    height: 3rem;
    padding-top:  0.9rem;
    padding-right: 0.5rem;
    margin-left: 0.9rem;
    border-bottom: 1px solid #f5f5f5;
    overflow: hidden;
    font-size: 0.9rem;
  }
  .vipSpecial>span{
    float: left;
    color: black;
    font-size: 1rem;
  }
  .vipSpecial>div{
    float: right;
    color: #999999;
  }
  .sheng{
    overflow: hidden;
    border-bottom: 1px solid #f5f5f5;
    margin-left: 0.9rem;
    padding-bottom: 1rem;
  }
  .sheng>img{
    width: 2.5rem;
    margin-top: 1.2rem;
    float: left;
  }
  .msg{
    float: left;
    margin-top: 1rem;
    margin-left: 0.7rem;
  }
  .msg>div:nth-child(1){
    font-size: 1rem;
  }
  .msg>div:nth-child(2){
    font-size: .6rem;
    color: #999999;
  }
  .msg>div:nth-child(3){
    font-size: .6rem;
    color: #999999;
  }
  .opening{
    margin-top:1rem;
    height: 15%;
    background: white;
  }
  .openingVip{
    font-size: 1rem;
    margin-left: 0.9rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .price{
    margin-left: 0.9rem;
    margin-top: 1rem;
    font-size: 1.1rem;
    float: left;
  }
  .price>span:nth-child(2){
    color: #f60;
  }
  .buy{
    float: right;
    margin-top: 1rem;
    margin-right: 1rem;
    width: 3.5rem;
    border: 1px solid #f60;
    color: #f60;
    border-radius: 0.3rem;
    height: 1.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .exchangeVip{
    background: white;
    height: 7%;
    margin-top: 1rem;
  }
  .exchangeVip div:nth-child(1){
    float: left;
    margin-top: .85rem;
    margin-left: .9rem;
    font-size: 1rem;
    color: black;
  }
  .exchangeVip div:nth-child(2){
    float: right;
    margin-top: .85rem;
    margin-right: .7rem;
    color: #999999;
  }
  .qf{
    clear: both;
  }
</style>
