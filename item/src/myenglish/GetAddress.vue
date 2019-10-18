<template>
    <div id="GetAddress">
      <div class="title">
        <img src="./img/箭头.png" alt="" @click="leave">
        <span>编辑地址</span>
        <span @click="redactspan">{{redact}}</span>
      </div>
      <div class="addAddress" @click="add">
        <span>新增地址</span>
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "GetAddress",
      data(){
        return {
          redact:"编辑",
        }
      },
      methods:{
        leave(){
          this.$router.push({path:'/accountinfo'})
        },
        add(){
          this.$router.push({path:'/pushadd'})
        },
        redactspan(){
          if(this.redact == "编辑"){
            this.redact = "完成"
          }else if (this.redact == "完成"){
            this.redact = '编辑'
          }
        }
      }
    }
</script>

<style scoped>
  #GetAddress{
    width: 100%;
    height: 100%;
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
    position: relative;
  }
  .title>img{
    height: 1.6rem;
    width: 1.8rem;
    position: relative;
    right: 8rem;
  }
  .title>span:nth-child(3){
    font-size: 1rem;
    font-weight: normal;
    color: white;
    position: absolute;
    right: 1rem;
  }
  .addAddress{
    width: 100%;
    height: 2.5rem;
    background: white;
    margin-top: 1.2rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    line-height: 2.5rem;
    padding: 0 1rem 0 1rem;
  }
  .addAddress>span{
    display: block;
  }
  .addAddress>span:nth-child(1){
    float: left;
  }
  .addAddress>span:nth-child(2){
    float: right;
    margin-top: .7rem;
  }
</style>
