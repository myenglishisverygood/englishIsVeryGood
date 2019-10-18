<template>
    <div class="wrap">
      <div class="head_top">
        商家详情
        <router-link :to="{path:'/center'}"><span class="glyphicon glyphicon-menu-left" ></span>
        </router-link>
      </div>
      <section class="activities_container">
        <header>活动与属性</header>
        <ul class="actibities_ul">
          <li>
            <span style="background-color: rgb(240,115,115)">减</span>
            <span>满30减5，满60减8(APP专享)</span>
          </li>
          <li>
            <span style="background-color: rgb(153,153,153)">报</span>
            <span>已加入‘外卖保’计划，食品安全有保障(APP专享)</span>
          </li>
          <li>
            <span style="background-color: rgb(87,169,255)">准</span>
            <span>准时必达,超时秒赔(APP专享)</span>
          </li>
          <li>
            <span style="background-color: rgb(153,153,153)">票</span>
            <span>该商家支持发票，请在下单时填写好发票抬头(APP专享)</span>
          </li>
        </ul>
      </section>
      <section class="shop_status_container">
        <router-link :to="{}" class="shop_status_header">
          <span class="shop_detail_title">食品监督安全公示</span>
          <span class="identification_detail">企业认证详情 ></span>
        </router-link>
        <section class="shop_statu_detail">
        <div class="res_wall">
          <img src="./img/哭脸.png"/>
        </div>
        <div class="cheak_data">
          <p>
            <span>检查监督结果：</span>
            <span class="bad">差</span>
          </p>
          <p>
            <span>检查日期</span>
            <span></span>
          </p>
        </div>
      </section>
        <div class="shop_status_info">
          <header>商家信息</header>
          <p>北京烤鸭</p>
          <p>地址:北京市顺义区</p>
          <p>营业时间:[6:30/9:00]</p>
          <p>
            <span>营业执照</span>
            <van-icon name="arrow" />
          </p>
          <p>
            <span>餐饮服务证许可</span>
            <van-icon name="arrow" />
          </p>
        </div>
      </section>

    </div>
</template>

<script>
    export default {
        name: "Business",

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
  .activities_container{
    background-color: #fff;
    margin: .4rem 0;
    padding-bottom: .6rem;
  }
  .activities_container header{
    font-size: 1rem;
    color: #333;
    line-height: 2.8rem;
    padding-left: .6rem;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: .3rem;
  }
  .actibities_ul{
    padding: 0 .6rem;
  }
  .actibities_ul li{
    margin-bottom: .8rem;
    margin-top: 0.8rem;
  }
.actibities_ul li span:first-of-type{
  font-size: .8rem;
  color: #fff;
  padding: .2rem;
  border: 1px;
  border-radius: .1rem;
  margin-right: .2rem;
}
  .actibities_ul li span:nth-of-type(2){
    font-size: .9rem;
    color: #666;
  }
  .shop_status_container{
    background-color: #fff;
    margin-bottom: .4rem;

  }
  .shop_status_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 2.8rem;
    padding: 0 .6rem;
    border-bottom: .025rem solid #f1f1f1;
  }
  .shop_detail_title{
    font-size: 1rem;
    color: #333;
  }
  .identification_detail{
    font-size: 1rem;
    color: #bbb;
    vertical-align: middle;
  }
  .shop_statu_detail{
    display: flex;
    padding: .6rem;
  }
  .res_wall img{
    width: 2rem;
    height: 2rem;
    margin-right: 0.8rem;
  }
  .bad{
    color: red;
  }
  .shop_status_info{
    background-color: #fff;
    margin-bottom: .4rem;
  }
  .shop_status_info header{
    line-height: 2.8rem;
    padding: 0 .6rem;
    font-size: 1rem;
    color: #333;
    border-bottom: .025rem solid #f1f1f1;
  }
  .shop_status_info p{
    font-size: .9rem;
    color: #666;
    padding: .7rem .6rem .7rem 0;
    margin-left: .6rem;
    border-bottom: .025rem solid #f5f5f5;
  }
  .shop_status_info p:nth-of-type(4){
    display: flex;
    justify-content: space-between;
  }
  .shop_status_info p:nth-of-type(5){
    display: flex;
    justify-content: space-between;
  }
</style>
