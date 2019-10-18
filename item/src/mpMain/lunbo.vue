<template>

  <div class="wai">

   <!--swiper -->
  <div class="swiper-container mark">
    <!--轮播区域-->
    <div class="swiper-wrapper">
      <!--第一部分-->
      <div class="swiper-slide">
        <div class="link1-to">
          <router-link class="to1" v-for="(v,i) in arr1[0]" :key="i" @click="tiao" :to="{name:'x',query:{title:v.title}}">
          <img :src="A+v.image_url" style="width: 3rem;height: 3rem"><p class="towz">{{v.title}}</p>
          </router-link>
        </div>

        <div class="link1-bo">
          <router-link class="to1" v-for="(v,i) in arr1[1]" :key="i" @click="tiao" :to="{name:'x',query:{title:v.title}}">
            <img :src="A+v.image_url" style="width: 3rem;height: 3rem"><p class="towz">{{v.title}}</p>
          </router-link>
        </div>
      </div>
      <!--第二部分-->
      <div class="swiper-slide">
        <div class="link1-to">
          <router-link class="to1" v-for="(v,i) in arr1[2]" :key="i" @click="tiao" :to="{name:'x',query:{title:v.title}}">
            <img :src="A+v.image_url" style="width: 3rem;height: 3rem"><p class="towz">{{v.title}}</p>
          </router-link>
        </div>

        <div class="link1-bo">
          <router-link class="to1" v-for="(v,i) in arr1[3]" :key="i" @click="tiao" :to="{name:'x',query:{title:v.title}}">
            <img :src="A+v.image_url" style="width: 3rem;height: 3rem"><p class="towz">{{v.title}}</p>
          </router-link>
        </div>
      </div>
    </div>
    <!--分页器-->
    <div class="swiper-pagination"></div>
  </div>
  <div class="shopxx">
    <div class="shop-mark">
      <i class="shop-img iconfont icon-shangjialiebiaoicon"></i><span class="shop-wz">附近商家</span>
    </div>
    <ul>
      <li class="shop-n" v-for="(v,i) in arrshop" :key="i" @click="xiang(v.id,i)">
        <div class="shop-z">
          <img :src="B+v.image_path" alt="" style="width: 5rem;height: 5rem;margin-left: 0.5rem">
        </div>
        <div class="shop-y">
            <div class="y-one">
              <h4 class="y-wz1">{{v.name}}</h4><span class="y-wz1y"><span class="y-wz1s jus">{{v.supports[0].icon_name}}</span><span class="y-wz1s">{{v.supports[1].icon_name}}</span><span class="y-wz1s">{{v.supports[2].icon_name}}</span></span>
            </div>
            <div class="y-two">
              <van-rate v-model="v.rating" readonly :count="5" allow-half size="0.8rem" :gutter="0"/><span class="y-wz2">{{v.rating}}</span><span class="y-wz2s">月售{{v.recent_order_num}}单</span><span :style="{borderColor:'#'+v.supports[1].icon_color,color:'#'+v.supports[1].icon_color}" class="y-wz2q">{{v.supports[1].name}}</span><span :style="{background:'#'+v.delivery_mode.color}" class="y-wz2r">{{v.delivery_mode.text}}</span>
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
<!--星星-->
<!-- <van-rate v-model="value" readonly :count="5" allow-half :size="10" :gutter="0"/>-->
<script>
    import Swiper from "swiper"
    import "swiper/dist/css/swiper.css"

    import Rate from 'vant/lib/rate';
    import 'vant/lib/rate/style';
    export default {
        name: "lunbo",
        data(){
          return{
            arr1:[],
            arrshop:[],
            A:"https://fuss10.elemecdn.com",
            B:"https://elm.cangdu.org/img/",
            latitude:"31.22967",
            longitude:"121.4762",
            yanse:"#3190e8",
            zun:"57A9FF",
            }
          },
        components:{
          [Rate.name]: Rate
        },
        methods:{
          tiao(){
            console.log("点击进入商品筛选页!");
          },
          xiang(id,index){
            localStorage.setItem("detailId",JSON.stringify(id));
            localStorage.setItem("shopId",JSON.stringify(index+1))
            this.$router.push({path:'/storedetail'})
          }
        },
        //设置轮播图--swiper
        mounted(){
          var mySwiper = new Swiper('.swiper-container', {
              loop:false,
              observer:false,
              pagination: {
                el: '.swiper-pagination',

              },
            });
        },
        created(){
          this.axios.get("https://elm.cangdu.org/v2/index_entry").then((result)=>{
            const len = result.data.length;
            //把数据分成四条数据一组
            let arr2 = [];
            const sliceNum = 4;
            for(let i = 0; i < len / sliceNum; i++){
              arr2.push(result.data.slice(i * sliceNum, (i+1) * sliceNum))
            }

            for(let j = 0; j < (sliceNum - len % sliceNum); j++) {
              arr2[arr2.length - 1];
            }
            this.arr1 = arr2;
            // console.log(this.arr1);


          }).catch((err)=>{
            console.log(err);
          });
          this.axios.get("https://elm.cangdu.org/shopping/restaurants",{
            // 还可以直接把参数拼接在url后边
            params: {
              latitude:this.latitude,
              longitude:this.longitude,
              order_by:5,
              limit:50
            }
            }).then((res)=>{
            this.arrshop=res.data;
          }).catch((err)=>{
            console.log(err);
          });
        }

    };
  // 屏幕自适应
  (function (doc, win) {
    var docEl = win.document.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var refreshRem = function () {
      var clientWidth = win.innerWidth
        || doc.documentElement.clientWidth
        || doc.body.clientWidth;

      console.log(clientWidth)
      if (!clientWidth) return;
      var fz;
      var width = clientWidth;
      fz = 16 * width / 375;
      docEl.style.fontSize = fz + 'px';
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, refreshRem, false);
    doc.addEventListener('DOMContentLoaded', refreshRem, false);
    refreshRem();

  })(document, window);
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452025_aqx5lq715n.css";
  body,html{
    width: 100%;
    height: 100%;
    font-size: 16px;
    list-style: none;
    text-decoration: none;
  }
  .wai{
    margin-top: 2.5rem;
    background: rgb(245,245,245);
    margin-bottom: 3rem;
  }
  .mark{
    width: 100%;
    height: 15rem;
    background: white;

  }
  .link1-to{
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 100%;
    height: 40%;
    background: white;
  }
  .to1{
    width: 3.5rem;
    height: 4rem;
    text-align: center;
  }
  .towz{
    margin-top: 0.8rem;
    color: rgb(102,102,102);
    font-size: 0.8rem;
  }
  .link1-bo{
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 100%;
    height: 35%;
    margin-top: 0.8rem;

  }
  .shopxx{
    margin-top: 1rem;
    width: 100%;
    background: white;
  }
  .shop-mark{
    width: 100%;
    height: 2rem;
    /*background: red;*/
  }
  .shop-img{
    margin-left: 0.5rem;
    line-height: 2rem;
    font-size: 1rem;
    color: #999999;
  }
  .shop-wz{
    margin-left: 0.3rem;
    font-size: 0.8rem;
    color: #999999;
  }
  .shop-n{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid rgb(245,245,245);
  }
  .shop-z{

  }
  .shop-y{
    width: 17rem;
  }
  .y-one{
    margin-left: 0.5rem;
    height: 1rem;
    overflow: hidden;
  }
  .y-wz1{
    display: inline;
    font-size: 1rem;
    font-weight: 600;
  }
  .y-wz1s{
    font-size: 0.8rem;
    margin: 0 0.1rem;
    color: #999999;
  }
 .y-wz1y{
   float: right;
 }
  .y-wz1:before{
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
  .y-two{
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    height: 1.5rem;
    overflow: hidden;
  }
  .y-wz2{
    line-height: 2rem;
    margin-left: 0.2rem;
    font-size: 0.8rem;
    color: #FF6000;
  }
  .y-wz2s{
    margin-left: 0.3rem;
    font-size: 0.8rem;
    color: #666;
  }
  .y-wz2r{
    margin-top: 0.5rem;
    float: right;
    color: white;
    font-size: 0.5rem;
    font-weight: 200;
  }
  .y-wz2q{
    float: right;
    margin-top: 0.5rem;
    margin-left: 0.3rem;
    border: 1px solid;
    font-size: 0.5rem;
    font-weight: 500;
  }
  .y-three{
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    height: 1.5rem;
    overflow: hidden;
  }
  .y-wz3{
    display: inline-block;
    float: left;
    line-height: 2.3rem;
    color: #666666;
    font-weight: 300;
    font-size: 0.5rem;
  }
  .y-wz3s{
    display: inline-block;
    float: right;
    line-height: 2.3rem;
    color: #666666;
    font-weight: 300;
    font-size: 0.5rem;
  }
</style>
