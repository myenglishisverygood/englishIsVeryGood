<template>
   <div class="wrap">
     <div class="head_top">
       编辑地址
       <router-link :to="{path:'/center'}"><span class="glyphicon glyphicon-menu-left" ></span>
       </router-link>
       <div class="zt" @click="zt">{{state}}</div>
     </div>
     <router-link :to="{}" class="add">
       <span>新增地址</span>
       <van-icon name="arrow"/>
     </router-link>
   </div>
</template>

<script>
    export default {
        name: "Compile",
      data(){
          return{
            state:"编辑",
            acc:true
          }
      },
      methods:{
        zt(){
          if (this.acc) {
            this.state="完成"
          }else{
            this.state="编辑"
          }
          this.acc=!this.acc;
        }
      },
      created(){
      }
    }
</script>

<style scoped>
  .wrap{
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
  .add{
    border-top: 1px solid #d9d9d9;
    margin-top: 0.5rem;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    background: white;
    border-bottom: 1px solid #d9d9d9;
    padding: 1rem 1rem;
  }
  .add span{

    font-size: 1rem;
    color: black;
  }
.zt{
  position: absolute;
  top: 0;
  right: 0;
}
</style>
