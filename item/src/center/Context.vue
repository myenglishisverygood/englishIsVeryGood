<template>
    <div class="wrap">
      <div class="head-top">
       {{gettitle}}
        <router-link :to="{path:'/server'}"><span class="glyphicon glyphicon-menu-left"></span></router-link>
      </div>
      <p>{{getcon}}</p>
    </div>
</template>

<script>
    export default {
        name: "Context",
      data() {
       return{
         context:""
      }
      },
      computed:{
          gettitle(){
            return this.$route.params.name;
          },
          getcon(){
            return this.$route.params.c
          }
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
  .head-top{
    width: 100%;
    height: 2.9rem;
    background: #3190e8;
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
  p{
    font-size: 0.9rem;
  }
</style>
