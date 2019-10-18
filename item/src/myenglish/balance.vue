<template>
    <!-- 余额 -->
    <div id="balance">
      <div class="title">
        <img src="./img/箭头.png" alt="" @click="returnCenter">
        <span>我的余额</span>
      </div>

      <div class="balanceInfo">
        <div class="balanceDetails">
          <div class="content">
            <div class="nowBalance">当前余额</div>
            <div class="question" @click="explain">
              <img src="./img/问号.png" alt="" class="questionImg">
              <span class="balanceExplain">余额说明</span>
            </div>
          </div>
          <p id="sum">
            <span>0.00</span>
            <span>元</span>
          </p>
          <div class="haveMoney">提现</div>
        </div>
      </div>

      <div id="deal">交易明细</div>
      <img src="./img/no-log.png" class="fk">
      <div id="noDeal">暂无明细记录</div>
    </div>
</template>

<script>
    export default {
        name: "balance",
        data(){
          return {

          }
        },
        methods:{
          returnCenter(){
            this.$router.push({path:'center'})
          },
          explain(){
            console.log(1)
          }
        }
    }
</script>

<style scoped>
  #balance{
    height: 100%;
    width: 100%;
    background: rgb(245,245,245);
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
  .title>img{
    height: 1.6rem;
    width: 1.8rem;
    position: relative;
    right: 8rem;
  }
  .balanceInfo{
    width: 100%;
    height: 10rem;
    background:rgb(49,144,232);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .balanceDetails{
    width: 95%;
    height: 90%;
    background: white;
    border-radius: 0.3rem;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
  }
  .questionImg{
    width: 1rem;
    height: 1rem;
  }
  .nowBalance{
    float: left;
    font-size: 0.9rem;
  }
  .question{
    float: right;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
  }
  .content{
    overflow: hidden;
  }
  .balanceExplain{
    color: #3190e8;
    margin-left:0.4rem;
  }
  #sum{
    margin: 0;
  }
  #sum>span:nth-child(1){
    font-size: 2.7rem;
    font-weight: 500;
  }
  #sum>span:nth-child(2){
    font-size: 1rem;
  }
  .haveMoney{
    text-align: center;
    background: rgb(204,204,204);
    width: 97%;
    height: 2.5rem;
    color: white;
    font-size: 1.3rem;
    line-height: 2.5rem;
    border-radius: 0.2rem;
    margin-top: 0.5rem;
  }
  #deal{
    margin: 1rem 0 0 0.7rem;
    color: #999999;
  }
  .fk{
    width: 15rem;
    height: 10rem;
    margin-left: 4rem;
  }
  #noDeal{
    font-size: 1rem;
    text-align: center;
    margin-top: 1.1rem;
  }
</style>
