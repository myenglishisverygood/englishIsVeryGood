<template>
    <!--发票抬头-->
  <div class="invoice">
    <div class="changeIn">选择发票抬头
      <span class="glyphicon glyphicon-menu-left" @click="ret"></span>
    </div>
    <div class="noNeed">
      <span>不需要开发票</span>
    </div>
    <div class="confirmBtn">
      <div class="but" @click="confBtn">确定</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "invoice",
        methods:{
          // 箭头点击事件
          ret(){},
          // 确定按钮点击事件
          confBtn(){}
        }
    }
</script>

<style scoped>
  .invoice{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
  .changeIn{
    width:100%;
    height:2.55rem;
    background: rgb(49,144,232);
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
  }
  .noNeed span{
    font-size: 1.02rem;
    line-height: 3.5rem;
  }
  .noNeed {
    padding: 0rem 0.9rem;
    margin-top: 1rem;
    background: white;
  }
  .but{
    background: rgb(76,217,100);
    border-radius: .2rem;
    line-height: 2.8rem;
    color: white;
    font-size: 1rem;
  }
  .confirmBtn{
    margin: 0.7rem;
    text-align: center;
  }
</style>
