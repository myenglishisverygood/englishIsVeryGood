<template>
  <div id="ChangeUsername">
    <div class="title">
      <img src="./img/箭头.png" alt="" @click="leave">
      <span>修改用户名</span>
    </div>
    <input type="text" v-model="username" id="input1" placeholder="输入用户名"
           :class="{inputbo:inputdefault,inputDan:inputborder}">
    <div class="des">
      <span :class="{desDan:desdan}">{{des}}</span>
    </div>
    <div class="confirm" @click="confirm">确认修改</div>
  </div>
</template>

<script>
  export default {
    name: "ChangeUsername",
    methods: {
      leave() {
        this.$router.push({path: '/accountinfo'})
      },
      confirm() {
        // 修改用户名
      }
    },
    data() {
      return {
        username: "",
        des: "用户名只能修改一次（5-24字符之间）",
        desdan: false,
        inputdefault: true,
        inputborder: false
      }
    },
    updated() {
      if (this.username.length > 0 && this.username.length < 5) {
        this.desdan = true;
        this.inputborder = true
        this.des = "用户名长度在5到24位之间"
      } else {
        this.desdan = false;
        this.inputborder = false
        this.des = "用户名只能修改一次（5-24字符之间）"
      }
    }
  }
</script>

<style scoped>
  #ChangeUsername {
    width: 100%;
    height: 100%;
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
    right: 7rem;
  }

  #input1 {
    width: 95%;
    display: block;
    margin: 1rem auto;
    margin-bottom: 0;
    background: #f5f5f5;
    height: 3rem;
    font-size: 1rem;
    padding-left: .4rem;
  }

  .des {
    font-size: .8rem;
    margin-left: .7rem;
    margin-top: .5rem;
    color: #666666;
  }

  .confirm {
    width: 95%;
    background: rgba(49, 153, 232);
    margin: 1rem auto;
    height: 3rem;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    line-height: 3rem;
  }

  .desDan {
    color: #ea3106;
  }

  .inputbo {
    border: 1px solid #ddd;
  }

  .inputDan {
    border-color: #ea3106;
  }
</style>
