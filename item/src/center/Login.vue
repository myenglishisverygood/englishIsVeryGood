<template>
  <div class="wrap">
    <div class="head_top">
      密码登录
      <router-link :to="{path:'/home/center'}"><span class="glyphicon glyphicon-menu-left" ></span>
      </router-link>
    </div>
    <form class="loginfrom">
      <div class="user">
        <input type="text" placeholder="账号" class="input_zh" v-model="username">
      </div>
      <div class="pass">
        <input :type="show == true ?'password':'text'" placeholder="密码"  class="input_zh" v-model="password">
        <van-switch v-model="flag" class="show" @change="shows"></van-switch>
      </div>

      <div class="input_code">
        <input type="text" placeholder="验证码"  class="code" v-model="verification">
        <img :src="Code" >
        <div class="not" @click="barter">
          <p>看不清</p>
          <p class="trade">换一张</p>
        </div>
        <div class="empty"></div>
      </div>
      <p>温馨提示:未注册过的账号，登录时将自动注册</p>
      <p>注册过的用户可凭账户密码登录</p>
      <button type="button" class="btn btn-success" @click="login">登录</button>
    </form>
    <router-link class="to_forget" :to="{path:'/repassword'}">重置密码</router-link>
    <div class="pop bounceIn" v-if="hiddens">
      <div class="raw">
        <span class="ver"></span>
        <span class="poi"></span>
      </div>
      <div class="cty">{{altermes}}</div>
      <div class="confrim" @click="logine">确认</div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  export default {
    name: "Login",
    data(){
      return{
        //存储验证码发起的请求
        Code:"",
        //用户名
        username:"",
        //密码
        password:"",
        //验证码
        verification:"",
        ifDisplay: false,
        altermes: "",
        hiddens: false,
        show: true,
        flag:false,
        user_id:0
      }

    },
    methods:{
      clearPassword: function () {
        this.password = '';
      },
      barter(){
        this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
          this.Code=res.data.code
        })
      },
      login(){
        // console.log(this.password, this.verification)
        //判断账号密码是否为空弹出框
        if (this.username == "") {
          this.hiddens = true;
          this.altermes = "用户名不能为空"
        } else if (this.password == "") {
          this.hiddens = true;
          this.altermes="密码不能为空"
        }else {
          this.axios.post("https://elm.cangdu.org/v2/login",{
            username:this.username,
            password:this.password,
            captcha_code:this.verification
          }).then((res)=>{
            console.log(res)
            //判断验证码是否输入正确
            if (!res.data.message) {
              // 持久化存储user_id
              if (!localStorage.getItem("user_id")) {
                this.user_id = res.data.user_id;
              } else {
                this.user_id = JSON.parse(localStorage.getItem("user_id"));
                this.user_id = res.data.user_id
              }
              localStorage.setItem("user_id", JSON.stringify(this.user_id));
              this.$router.push({path: "/home/center"});
            }else {
              this.hiddens = true;
              this.altermes = res.data.message;
            }
          }, (err) => {
            console.log(err);
          })
        }
      },
      logine() {
        this.hiddens = false
      },
      //跳转到首页
      ruterm() {
        this.$router.push({path: '/center'})
        console.log(1)
      },
      shows(){
        this.show=!this.show
      }

    },
    created(){
      this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
        this.Code=res.data.code
        // console.log(res)
      })

    }
  }

</script>

<style scoped>
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
  .user{
    width: 100%;
    background: white;
    height: 2.5rem;
  }
  .input_zh{
    width:70%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    padding: .6rem .8rem;
    outline: none;
    border-style:none;
    margin-top: 0.3rem;

  }
  .loginfrom{
    margin-top: .6rem;
  }
  .input_code{
    width: 100%;
    background: white;
    margin-top: 0.3rem;
    height: 4rem;
  }
  .code{
    display: block;
    float: left;
    width: 50%;
    height: 4rem;
    border-style: none;
    padding: .6rem .8rem;
  }
  .not{
    float: right;
    margin-top: 0.3rem;
    height: 4rem;
    font-size: 0.8rem;
    /*background: red;*/
  }
  .trade{
    color: blue;
  }
  p{
    color: red;
    margin-left: 0.6rem;
  }
  .btn{
    width: 100%;
    height: 3rem;

  }
  img{
    margin-top: 0.8rem;
    margin-left: 2rem;
  }
  input:focus{
    outline: none;
  }
  .empty{
    clear: both;
  }
  .pass{
    width: 100%;
    background: white;
    margin-top: 0.4rem;
    height: 2.5rem;
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
    top: 24%;
    left: 12%;
  }
  .raw{
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    border: 0.2rem solid rgb(76,217,100);
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
  .cty{
    font-size: 0.8rem;
    color: #333;
    line-height: 1.2rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }
  .to_forget{
    float: right;
    font-size: .8rem;
    color: #3b95e9;
    margin-right: .3rem;
    margin-top: 0.7rem;
  }
  .show {
    position: absolute;
    top: 6.5rem;
    right: 1rem;
  }
</style>
