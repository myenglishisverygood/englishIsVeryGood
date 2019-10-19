<template>
  <div id="ExchangeVip">
    <div class="title">
      <img src="./img/箭头.png" alt="" @click="leave">
      <span>兑换会员</span>
    </div>
    <p class="relevance">成功兑换后将关联到当前帐号：&nbsp&nbsp<span>{{username}}</span></p>
    <div class="codeInput">
      <input type="text" maxlength="10" placeholder="请输入10位卡号" v-model="exchangecode">
      <input type="text" maxlength="6" placeholder="请输入6位卡密" v-model="password">
    </div>
    <button id="exBtn" :class="[{btnGary:btngray},{btnBack:btnbgc}]" @click="exnet" :disabled="btndis">兑换</button>

    <div class="footer">
      <h3>——温馨提示——</h3>
      <div class="footerMsg">
        <p>新兑换的会员服务，权益以「会员说明」为准。</p>
        <p>月卡：30次减免配送费。</p>
        <p>季卡：90次减免配送费。</p>
        <p>年卡：360次减免配送费。</p>
        <p>*仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ExchangeVip",
    methods: {
      leave() {
      }
    },
    data() {
      return {
        username: '',
        btngray: true,
        btnbgc: false,
        btndis: true,
        down: false,
        errcode: "",
        exchangecode: "",
        password: ""
      }
    },
    created() {
      this.axios.get("https://elm.cangdu.org/v1/user").then((res)=>{
        this.username = res.data.username
      })
    },
    updated() {
      if (this.exchangecode.length == 10 && this.password.length == 6) {
        this.btngray = false;
        this.btnbgc = true;
        this.btndis = false
      } else {
        this.btnbgc = false
      }
    },
    methods: {
      exnet() {

      },
      leave() {
        this.$router.push({path: '/vipcenter'})
      }
    }

  }
</script>

<style scoped>
  #ExchangeVip {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
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
  .title {
    width: 100%;
    background: rgb(49, 144, 232);
    height: 2.7rem;
    text-align: center;
    line-height: 2.7rem;
    font-size: 1.2rem;
    color: white;
    font-weight: 700;
  }

  .title > img {
    height: 1.6rem;
    width: 1.8rem;
    position: relative;
    right: 8rem;
  }

  .relevance {
    margin-top: 1rem;
    margin-left: 1rem;
  }

  .relevance > span {
    font-weight: bold;
  }

  .codeInput input {
    width: 100%;
    border: none;
    height: 3rem;
    font-size: 0.96rem;
    padding-left: 0.9rem;
    font-family: Helvetica Neue, Tahoma, Arial;
  }

  .codeInput > input:nth-child(1) {
    border-bottom: 1px solid #f6f6f6;
  }

  #exBtn {
    width: 90%;
    height: 2.5rem;
    text-align: center;
    margin: 1.5rem auto;
    line-height: 2.5rem;
    border-radius: 0.2rem;
    color: white;
    font-size: 1rem;
    display: block;
    border-style: none;
  }

  #exBtn:focus {
    outline: none;
  }

  .btnBack {
    background: rgb(76, 217, 100);
  }

  .btnGary {
    background: rgb(204, 204, 204);
  }

  .footer > h3 {
    font-size: 1rem;
    color: #999999;
    text-align: center;
  }

  .footerMsg {
    margin-left: 3rem;
    padding-right: 1rem;
  }

  .footerMsg p {
    margin: 0;
    font-size: .7rem;
    color: #999999;
  }
</style>
