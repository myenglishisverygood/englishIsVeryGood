<template>
    <div class="redenvelopes">
      <div class="title">
      <img src="./img/箭头.png" alt="" class="arrows" @click="exit">
      <span>兑换红包</span>
    </div>
      <!-- 兑换码 -->
      <div class="exchangeCode">
        <input type="text" placeholder="请输入兑换码" v-model="exchange">
      </div>
      <!-- 验证码 -->
      <div class="code">
        <input type="text" placeholder="验证码" v-model="code" maxlength="4">
        <div class="changeImg">
          <div class="changeOne">
            <p>看不清</p>
            <p @click="changeSrc">换一张</p>
          </div>
          <img :src="codesrc">
        </div>
      </div>
      <!-- 兑换按钮 -->
      <button id="exBtn" :class="[{btnGary:btngray},{btnBack:btnbgc}]" @click="exnet" :disabled="btndis">兑换</button>

      <div class="pop bounceIn" v-if="down">
        <div class="raw">
          <span class="ver"></span>
          <span class="poi"></span>
        </div>
        <p>{{errcode}}</p>
        <div class="confrim" @click="down=false">确认</div>
      </div>
    </div>
</template>

<script>
  import animate from 'animate.css'
    export default {
        name: "Redenvelopes",
        data(){
          return {
            // 存放验证码图片路径
            codesrc:"",
            // 存放兑换码
            exchange:"",
            // 存放验证码
            code:"",
            // 更改按钮背景颜色
            btngray:true,
            btnbgc:false,
            btndis:true,
            down:false,
            errcode:""
          }
        },
      created(){
          this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
            this.codesrc = res.data.code
          });
      },
      updated(){
          if (this.exchange.length!=0 && this.code.length == 4){
            this.btngray = false;
            this.btnbgc = true;
            this.btndis = false
          }else {
            this.btnbgc = false
          }
      },
      methods:{
        changeSrc(){
          this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
            this.codesrc = res.data.code
          });
        },
        exit(){
          this.$router.push({path:'/redpacket'})
        },
        exnet(){
          this.axios.get("https://elm.cangdu.org/v1/user").then((res)=>{
            let data = {
              user_id:res.data.id,
              exchange_code:this.exchange,
              captcha_code:this.code
            };
            this.axios.post("https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange",data).then((suc)=>{
              if (suc.data.message == "无效的兑换码"){
                this.errcode = suc.data.message;
                this.down = true
              }
            })
          })
        }
      }
    }
</script>

<style scoped>
    .redenvelopes {
      width: 100%;
      height: 100%;
      background:rgb(241,241,241);
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
    .title>img{
      height: 1.6rem;
      width: 1.8rem;
      position: relative;
      right: 8rem;
    }
    input {
      border-style: none;
      height: 3rem;
      border-radius: 0.2rem;
      width: 100%;
      font-size: 1.1rem;
      padding-left: 0.5rem;
    }
    input:focus{
      outline: none;
    }
    .exchangeCode{
      margin: 1.5rem auto 1rem;
      width: 90%
    }
    .code{
      text-align: center;
      width: 90%;
      margin-left: 1.25rem;
      overflow: hidden;
    }
    .code input{
      width: 55%;
      display:inline-block;
      float: left;
    }
    .changeImg{
      background: white;
      width: 40%;
      height: 3rem;
      float: right;
     }
    .changeImg img{
      margin-top: 0.6rem;
      width: 4.5rem;
      height: 2rem;
    }
    .changeOne p{
      margin: 0;
      font-size:0.8rem;
    }
    .changeOne>p:nth-child(2){
      color: rgb(59,149,233);
    }
  .changeOne{
    float: right;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
  #exBtn{
    width: 90%;
    height: 2.5rem;
    text-align: center;
    margin: 1.5rem auto;
    line-height: 2.5rem;
    border-radius:0.2rem;
    color: white;
    font-size: 1rem;
    display: block;
    border-style: none;
  }
  #exBtn:focus{
    outline: none;
  }
  .btnBack{
    background: rgb(76,217,100);
  }
  .btnGary{
    background:rgb(204,204,204);
  }
    .pop{
      background: white;
      width: 75%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 1rem;
      border-radius: 0.6rem;
      position: absolute;
      top: 30%;
      left: 12%;
    }
    .raw{
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      border: 0.1rem solid rgb(76,217,100);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 1.2rem;
    }
    .ver{
      width: 0.18rem;
      height: 2rem;
      background: rgb(76,217,100);
    }
    .poi{
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 50%;
      margin-top: 0.7rem;
      background: rgb(76,217,100);
    }
    .pop p{
      font-size: 1.2rem;
    }
    .confrim{
      background: rgb(76,217,100);
      width: 100%;
      text-align: center;
      font-size: 1.2rem;
      color: white;
      height: 2.5rem;
      line-height: 2.5rem;
      font-family: "Microsoft YaHei";
      font-weight: 700;
      border-radius: 0 0 0.6rem 0.6rem;
    }
</style>
