<template>
    <div class="superVip_l">
      <div class="title">
        <img src="./img/箭头.png" alt="" @click="leave">
        <span>{{des}}</span>
      </div>
      <h2>{{vip}}</h2>
    </div>
</template>

<script>
    export default {
        name: "SuperVip",
        methods:{
          leave(){}
        },
        data(){
          return {
            des:"",
            vip:""
          }
        },
        created(){
          this.axios.get("https://elm.cangdu.org/v3/profile/explain").then((res)=>{
            this.des = res.data.supervipCaption;
            this.vip = res.data.supervipContent
          })
        }
    }
</script>

<style scoped>
  html,body{
    font-size: 16px;
  }
  .superVip_l{
    background: white;
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

  .title{
  width: 100%;
  background: rgb(49,144,232);
  height: 2.7rem;
  text-align: center;
  line-height: 2.7rem;
  font-size: 1.2rem;
  color: white;
  font-weight: 700;
  position: fixed;
  top:0;
  left: 0;
}
h2{
  margin-top: 3.5rem;
  font-size: 1.5rem;
  padding: 0 0.6rem 0 0.6rem;
}
  img{
    height: 1.6rem;
    width: 1.8rem;
    position: relative;
    right: 5rem;
  }
</style>
