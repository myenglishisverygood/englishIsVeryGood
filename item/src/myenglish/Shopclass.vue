<template>
  <!-- 筛选商品 -->
  <div class="shopClass">
    <div class="header">
      <img src="./img/箭头.png" alt="" @click="leave">
      <span>{{title}}</span>
      <!--筛选列表-->
      <div>
        <van-dropdown-menu>
          <van-dropdown-item :title="title">
            <van-tree-select :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex"/>
          </van-dropdown-item>
          <van-dropdown-item v-model="value2" :options="option2">
            <ul class="sort">
              <li v-for="(l,p) in sortArr" :key="p" @click="sortStore(l)">{{l}}</li>
            </ul>
          </van-dropdown-item>
          <van-dropdown-item title="筛选">
            <div class="method">配送方式</div>
            <div class="hummingbird"><img src="./img/蜂鸟.png"/>蜂鸟专送</div>
            <div class="propertyTitle">商家属性（可以多选）</div>
            <ul style="overflow: hidden">
              <li v-for="(con,k) in proArr" :key="k" class="context" @click="numpush">
                <span>{{con.icon_name}}</span>
                <span>{{con.name}}</span>
              </li>
            </ul>
            <div class="bot">
              <div class="empty" @click="empty">清空</div>
              <div class="confirm">确定<span :class="{numDiv:numDiv}">({{num}})</span></div>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
    </div>
    <!--列表-->
    <div class="shopList">
      <ul>
        <li class="shop-n" v-for="(v,i) in arrshop" :key="i" @click="xiang(v.id)">
          <div class="shop-z">
            <img :src="B+v.image_path" alt="" style="width: 5rem;height: 5rem;margin-left: 0.5rem">
          </div>
          <div class="shop-y">
            <div class="y-one">
              <h4 class="y-wz1">{{v.name}}</h4>
            </div>
            <div class="y-two">
              <van-rate v-model="v.rating" readonly :count="5" allow-half size="0.8rem" :gutter="0"/>
              <span class="y-wz2">{{v.rating}}</span><span class="y-wz2s">月售{{v.recent_order_num}}单</span><span
              :style="{borderColor:'#'+v.supports[1].icon_color,color:'#'+v.supports[1].icon_color}" class="y-wz2q">{{v.supports[1].name}}</span><span
              :style="{background:'#'+v.delivery_mode.color}" class="y-wz2r">{{v.delivery_mode.text}}</span>
            </div>
            <div class="y-three">
              <span class="y-wz3">￥{{v.float_minimum_order_amount}}起送 / 配送费约￥5</span>
              <span class="y-wz3s">{{v.distance}} / <span :style="{color:'#'+v.delivery_mode.color}">{{v.order_lead_time}}</span></span>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import {DropdownMenu, DropdownItem, Rate, TreeSelect} from 'vant'
  import 'vant/lib/index.css'

  export default {
    name: "Shopclass",
    data() {
      return {
        title: "",
        longitude: "121.4762",
        latitude: "31.22967",
        arrshop: "",
        B: "https://elm.cangdu.org/img/",
        value1: 0,
        value2: 'a',
        bzp: "",
        option1: [
          {text: '全部商品', value: 0},
          {text: '新款商品', value: 1},
          {text: '活动商品', value: 2}
        ],
        option2: [
          {text: '排序', value: 'a'},
        ],
        items: [],
        items_info: [],
        activeId: 1,
        activeIndex: 0,
        proArr: [],
        num: "0",
        numDiv: true,
        sortArr:["智能排序","距离最近","销量最高","起送价最低","配送速度最快","评分最高"],
      }
    },
    components: {
      [Rate.name]: Rate,
      [DropdownMenu.name]: DropdownMenu,
      [DropdownItem.name]: DropdownItem,
      [TreeSelect.name]: TreeSelect,
    },
    created() {
      this.title = this.$route.query.title;
      this.axios.get("https://elm.cangdu.org/shopping/restaurants", {
        params: {
          latitude: this.latitude,
          longitude: this.longitude
        }
      }).then((res) => {
        this.arrshop = res.data
      });
      this.axios.get("https://elm.cangdu.org/shopping/v2/restaurant/category").then((list) => {
        for (let i = 0; i < list.data.length; i++) {
          this.items_info.push([]);
          for (let j = 1; j < list.data[i].sub_categories.length; j++) {
            if (list.data[i].sub_categories) {
              this.items_info[i].push({text: list.data[i].sub_categories[j].name, info: 3, id: j})
            }
          }
        }
        for (let i in list.data) {
          this.items.push({text: list.data[i].name, children: this.items_info[i], info: list.data[i].count})
        }
      });


      this.axios.get("https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes").then((pro) => {
        this.proArr = pro.data
      })
    },
    methods: {
      empty(){
        this.num = 0
      },
      leave() {
        this.$router.go(-1)
      },
      xiang(id) {
        localStorage.setItem("detailId",JSON.stringify(id));
        localStorage.setItem("shopId",JSON.stringify(id))
        this.$router.push({path:'/storedetail'})
      },
      numpush() {
        this.num++;
        this.numDiv = false;
      },
      sortStore(sortName){
        console.log(sortName)
      }
    }
  }
</script>

<style scoped>
  .shopClass {
    width: 100%;
    height: 100%;
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
  .header {
    width: 100%;
    background: rgb(49, 144, 232);
    height: 2.7rem;
    text-align: center;
    line-height: 2.7rem;
    font-size: 1.2rem;
    color: white;
    font-weight: 700;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .header > img {
    height: 1.6rem;
    width: 1.8rem;
    position: relative;
    right: 8rem;
  }

  .shop-n {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid rgb(245, 245, 245);
  }

  .shop-y {
    width: 17rem;
  }

  .y-one {
    margin-left: 0.5rem;
    height: 1rem;
    overflow: hidden;
  }

  .y-wz1 {
    display: inline;
    font-size: 1rem;
    font-weight: 600;
  }

  .y-wz1:before {
    content: '品牌';
    display: inline-block;
    font-size: 0.8rem;
    line-height: 1rem;
    color: #333;
    background-color: #ffd930;
    padding: 0 0.2rem;
    border-radius: 0.1rem;
    margin-right: 0.2rem;
  }

  .y-two {
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    height: 1.5rem;
    overflow: hidden;
  }

  .y-wz2 {
    line-height: 2rem;
    margin-left: 0.2rem;
    font-size: 0.8rem;
    color: #FF6000;
  }

  .y-wz2s {
    margin-left: 0.3rem;
    font-size: 0.8rem;
    color: #666;
  }

  .y-wz2r {
    margin-top: 0.5rem;
    float: right;
    color: white;
    font-size: 0.5rem;
    font-weight: 200;
  }

  .y-wz2q {
    float: right;
    margin-top: 0.5rem;
    margin-left: 0.3rem;
    border: 1px solid;
    font-size: 0.5rem;
    font-weight: 500;
  }

  .y-three {
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    height: 1.5rem;
    overflow: hidden;
  }

  .y-wz3 {
    display: inline-block;
    float: left;
    line-height: 2.3rem;
    color: #666666;
    font-weight: 300;
    font-size: 0.5rem;
  }

  .y-wz3s {
    display: inline-block;
    float: right;
    line-height: 2.3rem;
    color: #666666;
    font-weight: 300;
    font-size: 0.5rem;
  }

  .shopList {
    margin-top: 6.5rem;
  }

  >>> .van-tree-select__item {
    color: #999999;
  }

  >>> .van-tree-select {
    height: 400px;
  }

  >>> van-switch-cell:nth-child(1) {
    color: black;
    font-size: .8rem;
    font-weight: normal;
  }

  >>> van-switch-cell:nth-child(2) {
    color: black;
    font-size: .8rem;
    font-weight: normal;
  }

  .method {
    color: #333333;
    font-size: .7rem;
    text-align: left;
    margin-left: 1rem;
    font-weight: normal;
  }

  .hummingbird {
    display: flex;
    align-items: center;
    text-align: left;
    width: 28%;
    height: 2rem;
    border: 1px solid #e4e4e4;
    border-radius: .2rem;
    color: #333333;
    font-size: .7rem;
    font-weight: normal;
    margin-left: 1rem;
  }

  .hummingbird > img {
    width: 1.3rem;
    height: 1.3rem;
  }

  .propertyTitle {
    color: #333333;
    font-size: .7rem;
    text-align: left;
    margin-left: 1rem;
    font-weight: normal;
  }

  .context {
    color: black;
    width: 30%;
    height: 2rem;
    float: left;
    text-align: left;
    border: 1px solid #e4e4e4;
    margin-left: .5rem;
    padding-left: .5rem;
    margin-bottom: .5rem;
    line-height: 2rem;
    padding-bottom: 2.2rem;
  }

  .context span:nth-child(1) {
    font-size: .7rem;
    font-weight: normal;
    border: 1px solid #666666;
    border-radius: .2rem;
    padding: .1rem .15rem;
  }

  .context span:nth-child(2) {
    font-size: .7rem;
    font-weight: normal;
  }

  .bot {
    background: #f5f5f5;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    padding: .5rem 0;
  }

  .empty {
    width: 45%;
    font-size: 1.1rem;
    background: white;
    color: black;
    float: left;
    font-weight: normal;
    border-radius: .4rem;
  }

  .confirm {
    width: 45%;
    font-size: 1.1rem;
    float: left;
    background: rgb(86, 209, 118);
    font-weight: normal;
    border-radius: .4rem;
  }

  .numDiv {
    display: none;
  }
  .sort{
    color: #666666;
    text-align: left;
    font-size: .5rem;
    padding-left: 1rem;
  }
  .sort li {
    border-bottom: 1px solid #e4e4e4;
  }
</style>
