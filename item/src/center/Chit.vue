<template>
  <div class="wrap">

    <div class="head-top">
      {{gettitle}}
      <router-link :to="{path:'/redpacket'}"><span class="glyphicon glyphicon-menu-left"></span></router-link>
    </div>

    <div class="context">{{getcon}}
      <div  v-for="(x,y) in con" class="text">
        <h4 class="title">{{x[0]}}</h4>
        <p class="p1">{{x[1]}}</p>
        <p>{{x[2]}}</p>
        <p>{{x[3]}}</p>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "Explain",
    data() {
      return{
        con:[],
      }
    },
    computed:{
      gettitle(){
        return this.$route.params.name;
      },
      getcon(){
        let val = this.$route.params.va
        console.log(val)
        let everyval = val.split("###")
        for(let i = 1 ; i < everyval.length; i++){
          let v = everyval[i].split("？")
          this.con.push(v);
        }
      }
    }
  }

</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 100%;
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
  .context{
    padding-left: 0.5rem;
  }
  .title{
    line-height: 2rem;
    font-size: 1rem;
  }
  .p1{
    font-size: .8rem;
    color: #666;
    line-height: 1rem;
  }
</style>
