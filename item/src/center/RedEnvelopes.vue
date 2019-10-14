<template>
    <div class="wrap">
      <div class="head-top">
       {{gettitle}}
        <router-link :to="{path:'/fg'}"><span class="glyphicon glyphicon-menu-left"></span></router-link>
      </div>
      <div class="context">{{getcon}}
        <div  v-for="(x,y) in envelope" class="text">
          <h4 class="title">{{x[0]}}</h4>
          <p class="p1">{{x[1]}}</p>
          <p class="p1">{{x[2]}}</p>
          <p class="p1">{{x[3]}}</p>
          <p class="p1">{{x[4]}}</p>
          <p class="p1">{{x[5]}}</p>
          <p class="p1">{{x[6]}}</p>
          <p class="p1">{{x[7]}}</p>
          <p class="p1">{{x[8]}}</p>
          <p class="p1">{{x[9]}}</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RedEnvelopes",
      data(){
          return{
            envelope:[],
          }
      },
     computed:{
       gettitle(){
         return this.$route.query.name;
       },
       getcon(){
         let val = this.$route.query.va
         let everyval = val.split("###")
         for(let i = 1 ; i < everyval.length; i++){
           let v = everyval[i].split(" * ")
           this.envelope.push(v);
         }
       }
     }
    }
</script>

<style scoped>
  .wrap{
    background: white;
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
    position: fixed;
    top: 3rem;
    background: white;
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
