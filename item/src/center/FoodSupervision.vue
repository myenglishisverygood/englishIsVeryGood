<template>
    <div class="wrap">
      <div class="head_top">
       食品监督安全公示
        <router-link :to="{path:'/center'}"><span class="glyphicon glyphicon-menu-left" ></span>
        </router-link>
      </div>
      <div class="shop_status_container">
       <header>食品监督安全公示</header>
        <div class="shop_status_detial">
          <div class="ku">
            <img src="./img/哭脸.png" alt="">
          </div>
          <div class="cheak_data">
            <p>
              <span>监督检查结果：</span>
              <span class="shop_status_bar">差</span>
            </p>
            <p>
              <span>检查日期：</span>
              <span></span>
            </p>
          </div>
        </div>
      </div>
      <div class="shop_status_container">
        <header>工商登记信息</header>
        <ul>
          <li>企业名称</li>
          <li>工商执照注册号</li>
          <li>注册资本</li>
          <li>注册地址</li>
          <li>属地监管所</li>
          <li>法定代表人</li>
          <li>经营范围</li>
        </ul>
      </div>
      <div class="shop_status_container">
        <header>餐饮许可证</header>
        <ul>
          <li>营业范围</li>
          <li>许可证有效期</li>
          <li>许可证号</li>
          <li>发证时间</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FoodSupervision"
    }
</script>

<style scoped>
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
  .shop_status_container{
    background-color: #fff;
    margin-bottom: .4rem;
  }
  .shop_status_container header{
    line-height: 2.8rem;
    padding: 0 .6rem;
    border-bottom: .025rem solid #f1f1f1;
    font-size: .95rem;
    color: #333;
  }
  .shop_status_detial{
    display: flex;
    padding: .6rem;
  }
  .ku img{
    width: 3rem;
    height: 3rem;
    margin-right: .6rem;
  }
.cheak_data{
  font-size: .8rem;
  color: #666;
}
  ul{
    margin-left: 1rem;
    padding: .5rem 0;
  }
  ul li{
    padding: 0.2rem 0;
    margin-bottom: .4rem;
  }
</style>
