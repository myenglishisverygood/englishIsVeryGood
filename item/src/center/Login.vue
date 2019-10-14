<template>
    <div class="wrap">
      <div class="head_top">
        密码登录
        <router-link :to="{}"><span class="glyphicon glyphicon-menu-left" ></span>
        </router-link>
      </div>
     <form class="loginfrom">
       <div class="user">
         <input type="text" placeholder="账号" class="input_zh" v-model="username">
       </div>

       <div class="pass">
         <input type="password" placeholder="密码"  class="input_zh" v-model="password">
       </div>
       <div class="input_code">
         <input type="password" placeholder="验证码"  class="code" v-model="verification">
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

    </div>
</template>

<script>
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
            verification:""
        }

      },
      methods:{
        barter(){
          this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
            this.Code=res.data.code
          })
        },
        login(){
           this.axios.post("https://elm.cangdu.org/v2/login",{
             username:this.username,password:this.password,captcha_code:this.verification
           }).then((res)=>{
     console.log(res.data)
           })
        }
        },
      created(){
          this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
            this.Code=res.data.code
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

</style>
