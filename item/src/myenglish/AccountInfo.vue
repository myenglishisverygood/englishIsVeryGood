<template>
  <div id="AccountInfo">
    <div class="title">
      <img src="./img/箭头.png" alt="" @click="leave">
      <span>账户信息</span>
    </div>
    <div class="first">

      <div class="portrait">
        <input type="file" class="uploadFile" @change="uploadfile($event)" name="file" accept="image/jpeg,image/png">
        <div class="portraitSpan">
          <span>头像</span>
        </div>
        <div class="portraitImg">
          <img :src="userImgUrl">
          <span class="glyphicon glyphicon-menu-right"></span>
        </div>
      </div>


      <div class="user" @click="changeUsername">
        <div>用户名</div>
        <div>
          <span style="color: #999999;">{{username}}</span>
          <span class="glyphicon glyphicon-menu-right"></span>
        </div>
      </div>

      <div class="address" @click="changeAddress">
        <div>收货地址</div>
        <div class="glyphicon glyphicon-menu-right"></div>
      </div>

    </div>
    <div class="mid">
      <span class="AccountBind">账号绑定</span>
      <div class="AccountBingContent" @click="down=true">
        <div>
          <img src="./img/bindphone.png" class="contentImg">
          <span>手机</span>
        </div>
        <div class="glyphicon glyphicon-menu-right"></div>
      </div>
    </div>
    <div class="bot">
      <span class="suu">安全设置</span>
      <div class="loginPassword" @click="changePw">
        <div>
          <span>登录密码</span>
        </div>
        <div>
          <span>修改</span>
          <span class="glyphicon glyphicon-menu-right"></span>
        </div>
      </div>
    </div>
    <van-button class="exitLogin" @click="exitlogin">退出登录</van-button>
    <van-overlay :show="show"/>
    <div class="pop bounceIn" v-if="alert">
      <div class="raw">
        <span class="ver"></span>
        <span class="poi"></span>
      </div>
      <p>是否退出登录</p>
      <div class="butt">
        <div class="wait" @click="wait">再等等</div>
        <div class="exit" @click="exit">退出登录</div>
      </div>
    </div>

    <div class="pop2 bounceIn" v-if="down">
      <div class="raw">
        <span class="ver"></span>
        <span class="poi"></span>
      </div>
      <p>请在手机APP中设置</p>
      <div class="confrim2" @click="down=false">确认</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AccountInfo",

    data() {
      return {
        userImgUrl: "//elm.cangdu.org/img/default.jpg",
        username: "",
        alert: false,
        show: false,
        local: "",
        down: false
      }
    },
    created(){
      this.axios.get("https://elm.cangdu.org/v1/user").then((res)=>{
        console.log(res)
        this.username = res.data.username
      })
    },
    methods: {
      //上传头像
      uploadfile(e) {
        let file = e.target.files[0];
        let param = new FormData();
        param.append('tweetPic', file, file.name);
        let config = {headers: {'Content-Type': 'multipart/form-data'}};
        this.axios.post("https://elm.cangdu.org/v1/addimg/type=avatar", param, config).then((res) => {
          console.log(res)
        })
      },
      changePw() {
        this.$router.push({path: '/repassword'})
      },

      //返回
      leave() {
        this.$router.push({path: '/home/center'})
      },
      //修改用户名
      changeUsername() {
        this.$router.push({path: '/changeusername'})
      },
      //选择收货地址
      changeAddress() {
        this.$router.push({path: '/getaddress'})
      },
      exitlogin() {
        this.show = true;
        this.alert = true
      },
      wait() {
        this.show = false;
        this.alert = false
      },
      exit() {
        this.axios.get("https://elm.cangdu.org/v2/signout").then((res)=>{
          if(res.data.status == 1){
            window.localStorage.removeItem("user_id")
            this.$router.push({path:'/home/center'})
          }
        });

      }
    },
  }
</script>

<style scoped>
  #AccountInfo {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
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

  .first {
    width: 100%;
    height: 11rem;
    background: white;
    margin-top: .8rem;
    border-top: 1px solid #e4e4e4;
  }

  .portrait {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 44%;
    border-bottom: 1px solid #e4e4e4;
    position: relative;
  }

  .uploadFile {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  .portraitSpan {
    font-size: .9rem;
    margin-left: 1rem;
  }

  .portraitImg {
    margin-right: 1rem;
  }

  .portraitImg > img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .user {
    display: inline-flex;
    width: 100%;
    height: 28%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: .9rem;
  }

  .glyphicon {
    color: #999999;
  }

  .address {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 28%;
    border-bottom: 1px solid #e4e4e4;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: .9rem;
  }

  .AccountBind {
    display: block;
    margin: .5rem 0 .5rem 1rem;
    font-size: .9rem;
  }

  .AccountBingContent {
    background: white;
    width: 100%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font-size: .9rem;
  }

  .contentImg {
    margin-right: .4rem;
  }

  .suu {
    display: block;
    margin: .5rem 0 .5rem 1rem;
    font-size: .9rem;
  }

  .loginPassword {
    background: white;
    width: 100%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font-size: .9rem;
  }

  .exitLogin {
    display: block;
    background: rgb(216, 88, 74);
    width: 95%;
    text-align: center;
    margin: 1rem auto;
    height: 2.5rem;
    color: white;
    line-height: 2.5rem;
    border-radius: .3rem;
  }

  .pop {
    background: white;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 1rem;
    border-radius: 0.6rem;
    position: absolute;
    top: 32%;
    left: 8%;
    z-index: 111;
  }

  .raw {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    border: 0.1rem solid rgb(76, 217, 100);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1.2rem;
  }

  .ver {
    width: 0.18rem;
    height: 2rem;
    background: rgb(76, 217, 100);
  }

  .poi {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    margin-top: 0.7rem;
    background: rgb(76, 217, 100);
  }

  .pop p {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .wait {
    width: 28%;
    background: rgba(193, 193, 193);
    height: 2rem;
    float: left;
    text-align: center;
    line-height: 2rem;
    margin: 0 1.5rem 3rem 3.5rem;
    border-radius: .3rem;
  }

  .exit {
    width: 28%;
    background: rgba(221, 107, 85);
    height: 2rem;
    float: left;
    text-align: center;
    line-height: 2rem;
    border-radius: .3rem;
  }

  .butt {
    width: 100%;
    overflow: hidden;
    color: white;
  }

  .pop2 {
    background: white;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 1rem;
    border-radius: 0.6rem;
    position: absolute;
    top: 32%;
    left: 12%;
  }

  .raw {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    border: 0.1rem solid rgb(76, 217, 100);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1.2rem;
  }

  .ver {
    width: 0.18rem;
    height: 2rem;
    background: rgb(76, 217, 100);
  }

  .poi {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    margin-top: 0.7rem;
    background: rgb(76, 217, 100);
  }

  .pop p {
    font-size: 1.2rem;
  }

  .confrim2 {
    background: rgb(76, 217, 100);
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
