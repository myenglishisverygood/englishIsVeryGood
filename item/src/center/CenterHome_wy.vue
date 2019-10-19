<template>
  <div id="wrap">
    <div id="head_top">
      <span class="glyphicon glyphicon-menu-left left"></span>
      <span class="me">我的</span>
    </div>
    <div id="link" @click="login">
      <div class="img_tx">
        <a href="" class="tx"><img src="./img/tx.jpeg"/></a>
      </div>
      <div class="cen">
        <router-link :to="{}" class="login">{{usernameAll}}</router-link>
        <p class="p1">
          <span class="glyphicon glyphicon-phone phone"></span>
          <span class="num">暂无绑定手机号</span>
          <span class="glyphicon glyphicon-menu-right right"></span>
        </p>
      </div>
      <div class="empty"></div>

    </div>
    <div class="info-data">
      <ul class="clear">
        <router-link :to="{path:'/balance'}" class="info-data-link">
            <span class="info-data-top">
              <b>{{balance}}.00</b>元</span>
          <span class="info-data-bottom">我的余额</span>
        </router-link>
        <router-link :to="{path:'/redpacket'}" class="info-data-link">
            <span class="info-data-top cent">
              <b>{{gift_amount}}</b>个</span>
          <span class="info-data-bottom">我的优惠</span>
        </router-link>
        <router-link :to="{path:'/integration'}" class="info-data-link">
            <span class="info-data-top bott">
              <b>{{point}}</b>个</span>
          <span class="info-data-bottom">我的积分</span>
        </router-link>
      </ul>
    </div>
    <div class="profile">
      <router-link :to="{path:'/home/dingdan'}" class="myorder">
        <i class="iconfont icon-chakantiezigengduo aa"></i>
        <div class="myorder-div">
          <span class="myorder-span">我的订单</span>
          <a href="" class="glyphicon glyphicon-menu-right"></a>
        </div>
      </router-link>
      <router-link :to="{path:'/integral'}" class="myorder">
        <i class="iconfont icon-shangchengjifenshangcheng_xuanzhong bb"></i>
        <div class="myorder-div">
          <span class="myorder-span">积分商城</span>
          <a href="" class="glyphicon glyphicon-menu-right"></a>
        </div>
      </router-link>
      <router-link :to="{path:'/vipcenter'}" class="myorder">
        <i class="iconfont icon-huangguan cc"></i>
        <div class="myorder-div">
          <span class="myorder-span">饿了么会员卡</span>
          <a href="" class="glyphicon glyphicon-menu-right"></a>
        </div>
      </router-link>
    </div>
    <div class="profile">
      <router-link :to="{path:'/server'}" class="myorder">
        <i class="iconfont icon-fuwu ee"></i>
        <div class="myorder-div">
          <span class="myorder-span">服务中心</span>
          <a href="" class="glyphicon glyphicon-menu-right"></a>
        </div>
      </router-link>
      <router-link :to="{path:'/download'}" class="myorder">
        <i class="iconfont icon-elemo ee"></i>
        <div class="myorder-div">
          <span class="myorder-span">下载饿了么App</span>
          <a href="" class="glyphicon glyphicon-menu-right"></a>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Foots from "../mpMain/foots";

  export default {
    name: "CenterHome_wy",
    components: {Foots},
    data() {
      return {
        StoreImage: [],
        usernameAll: "登录/注册",
        ress: "",
        gift_amount:0,
        balance:0,
        point:0
      }
    },
    methods: {
      login() {
        if(this.ress != ""){
          this.$router.push({path:"/accountinfo"})
        }else {
          this.$router.push({path: '/login'})
        }
      },
    },

    created() {
      if(localStorage.getItem("user_id")){
        this.axios.get("https://elm.cangdu.org/v1/user").then((res) => {
          this.usernameAll
          if (res.data.username != "") {
            this.usernameAll = res.data.username;
            this.ress = res.data.username;
          }
          this.gift_amount = res.data.gift_amount;
          this.balance = res.data.balance;
          this.point = res.data.point
        })
      }else {
        this.usernameAll = "登录/注册";
      }
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453437_ua5wuyx4yj.css";
  @import "//at.alicdn.com/t/font_1453437_hprx77sxfrk.css";
  @import "//at.alicdn.com/t/font_1453437_8sw1dqtneoq.css";
  @import "//at.alicdn.com/t/font_1453437_z5gu7787uq.css";
  @import "//at.alicdn.com/t/font_1453437_97ps2ike755.css";

  #wrap {
    width: 100%;
    height: 100%;
    background: rgb(245, 245, 245);
    /*overflow: hidden;*/
  }

  #head_top {
    height: 3rem;
    background: rgb(49, 144, 233);
    text-align: center;
    /*overflow: hidden;*/
  }

  .me {
    font-size: 1.3rem;
    color: white;
    display: inline-block;
    font-weight: 800;
    margin-top: 0.4rem;

  }

  .left {
    font-size: 1.4rem;
    color: white;
    float: left;
    margin-top: 0.4rem;
    margin-left: 0.2rem;
  }

  #link {
    height: 5rem;
    background-color: #3190e8;
    /*overflow: hidden;*/
    height: 5rem;
  }

  .img_tx {
    float: left;
    margin-left: 2rem;
    width: 15%;

  }

  .tx img {
    border-radius: 50%;
    margin-top: 0.5rem;
    width: 3rem;
    height: 3rem;
  }

  .login {
    color: white;
    font-size: 1.2rem;
    font-weight: 800;
    font-family: "Helvetica Neue";
    width: 85%;

  }

  .phone {

    color: white;
    font-size: 1rem;

  }

  .num {
    color: white;
    font-size: 1rem;

  }

  .right {

    color: white;
    font-size: 1rem;
    margin-left: 7rem;

  }

  .cen {
    float: left;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    /*width: 30rem;*/

  }

  .info-data {
    width: 100%;
    height: 5rem;
    background-color: white;
    /*box-sizing: border-box;*/
    /*overflow: hidden;*/

  }

  .clear {
    zoom: 1;
  }

  .info-data-link {
    float: left;
    width: 33%;
    height: 5rem;
    display: block;
    border-right: 1px solid #f1f1f1;

  }

  .info-data-top {
    font-size: .88rem;
    color: #333;
    padding: .853333rem 0 .453333rem;
  }

  .info-data-top b {
    display: inline-block;
    font-size: 1.5rem;
    color: #f90;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue, Tahoma;
  }

  .info-data-bottom {
    font-size: .8rem;
    color: #666;
    font-weight: 400;
    padding-bottom: .453333rem;
  }

  .info-data-link span {
    display: block;
    width: 100%;
    text-align: center;
  }

  .aa {
    color: red;

  }

  .profile {
    margin-top: .4rem;
    background: white;

  }

  .myorder {
    padding-left: 1.6rem;
    display: flex;
    align-items: center;
    /*height: 3rem;*/
  }

  .myorder-div {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    padding: .533333rem .266667rem .433333rem 0;
    font-size: .9rem;
    margin-left: 0.3rem;
    color: #333;
    display: flex;
    justify-content: space-between;
  }

  .bb {
    color: #f90;
  }

  .cc {
    color: yellow;
  }

  .ee {
    color: blue;
  }

  .empty {
    clear: both;
  }

  .cent b {
    color: #ff5f3e;
  }

  .bott b {
    color: #6ac20b;
  }
</style>
