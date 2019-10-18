<template>
    <div class="repassword">
      <div class="title">
        <img src="./img/箭头.png" alt="" @click="leave">
        <span>重置密码</span>
      </div>
      <div class="inputDiv">
        <input type="text" placeholder="账号" v-model="id">
        <input type="text" placeholder="旧密码" v-model="oldpassword">
        <input type="text" placeholder="请输入新密码" v-model="newpassword">
        <input type="text" placeholder="请确认密码" v-model="affirmpassword">

        <div class="code">
          <input type="text" placeholder="验证码" v-model="authcode">
          <img :src="codeSrc">
          <div class="changeCode">
            <p>看不清</p>
            <p @click="changeImg">换一张</p>
          </div>
        </div>
      </div>
      <div class="confirmChange" @click="confirmC">确认修改</div>
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
    export default {
        name: "Repassword",
      data(){
        return {
          // 账号
          id:"",
          // 旧密码
          oldpassword:"",
          // 新密码
          newpassword:"",
          // 确认新密码
          affirmpassword:"",
          // 验证码
          authcode:"",
          // 储存验证码图片路径
          codeSrc:"",
          hiddens:false,
          altermes:""

        }
      },
        methods:{
          // 箭头点击事件
          leave(){
            this.$router.go(-1)
          },
          // 确认修改点击事件
          confirmC(){
            //判断账号密码是否为空弹出框
            if (this.id == "") {
              this.hiddens = true;
              this.altermes = "用户名不能为空"
            } else if (this.oldpassword == "") {
              this.hiddens = true;
              this.altermes="密码不能为空"
            }else if(this.newpassword==""){
              this.hiddens=true;
              this.altermes="新密码不能为空"
            }else if (this.affirmpassword!=this.newpassword){
              this.hiddens=true;
              this.altermes="两次输入的密码不一致"
            }else {
              this.axios.post("https://elm.cangdu.org/v2/changepassword",{
                username:this.id,
                oldpassWord:this.oldpassword,
                newpassword:this.newpassword,
                confirmpassword:this.affirmpassword,
                captcha_code:this.authcode
              }).then((res)=>{
                console.log(res)
                if (res.data.success != ""){
                  this.hiddens=true;
                  this.altermes=res.data.success;
                }
              },(err)=>{
                console.log(err)
              })
            }

          },
          logine() {
            this.$router.push({path:'/accountinfo'})
          },
          // 点击更换验证码
          changeImg(){
            this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
              console.log(res)
              this.codeSrc = res.data.code
            })
          }
        },
        created(){
          this.axios.post("https://elm.cangdu.org/v1/captchas").then((res)=>{
            console.log(res.data);
            this.codeSrc = res.data.code
          })
        }
    }
</script>

<style scoped>
  .repassword{
    height: 100%;
    width: 100%;
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
  img{
    height: 1.6rem;
    width: 1.8rem;
    position: relative;
    right: 8rem;
  }
  .inputDiv>input:nth-child(1){
    margin-top: 1.5rem;
  }

  input{
    border-style: none;
    width: 100%;
    border-bottom: 0.01rem solid rgb(241,241,241);
    height: 3rem;
    padding-left: 1rem;
    font-size: 1rem;
  }
  input:focus{
    outline: none;
  }
  .confirmChange{
    width: 87%;
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    font-size: 1.1rem;
    color: white;
    background: rgb(76,217,100);
    border-radius: 0.3rem;
    margin: 1.5rem auto;
  }
  .code{
     background: white;
   }
  .code img{
    width: 3.5rem;
    height: 2.5rem;
    position: relative;
    left: 2.6rem;
  }
  .code input {
    width: 55%;
  }
  .code p{
    margin:0;
  }
  .changeCode{
    font-size: 0.8rem;
    float: right;
    margin-right: 1.5rem;
    margin-top: 0.4rem;
  }
  .changeCode>p:nth-child(2){
    color: rgb(59,149,233);
  }
  .pop{
    background: white;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 1rem;
    border-radius: 0.6rem;
    position: absolute;
    top: 35%;
    left: 7.5%;
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
</style>
