<template>
    <div class="shopClass">
      <div class="title">
        <img src="./img/箭头.png" alt="" @click="leave">
        <span>{{title}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Shopclass",
      data(){
        return {
          title:""
        }
      },
      created(){
          this.title = this.$route.query.title
      },
      methods:{
          leave(){
            this.$router.push({path:'/home'})
          }
      }
    }
</script>

<style scoped>
  .shopClass{
    width: 100%;
    height: 100%;
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
    top: 0;
    left: 0;
  }
  .title>img{
    height: 1.6rem;
    width: 1.8rem;
    position: relative;
    right: 8rem;
  }
</style>
