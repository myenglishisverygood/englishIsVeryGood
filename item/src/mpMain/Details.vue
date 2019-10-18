<template>
    <div id="Smark" :style="">
      <nav class="navbar navbar-fixed-top">
        <i class="iconfont icon-jiantou2" style="font-size: 2rem;color: white;font-weight: 600;" @click="fan"/>
      </nav>
      <div class="mark1">
        <div class="fox">
          <div class="Dleft">
            <img :src="B+arr.image_path" alt="" style="width: 4.5rem;height: 4.5rem;" class="tupian">
          </div>
          <div class="Dright">
             <span class="r-wz1">{{arr.name}}</span>
             <span class="r-wz2" v-if="arr.piecewise_agent_fee != undefined">商家配送 / 分钟送达 / {{arr.piecewise_agent_fee.tips}}</span>
            <span class="r-wz3">{{arr.promotion_info}}</span>
          </div>
          <div class="huo">
            <i class="iconfont icon-jiantou2-copy jian" @click="huo"></i>
          </div>
        </div>
      </div>

      <van-tabs @click="onClick" color="#3190e8" line-width="2.5rem" title-active-color="#3190e8" line-height="0.1rem" class="daohang">
        <van-tab title="商品">
          <List></List>
        </van-tab>
        <van-tab title="评论">
          <Comments></Comments>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
  import Tab from 'vant/lib/tab';
  import Tabs from 'vant/lib/tabs'
  import 'vant/lib/tab/style';
  import 'vant/lib/tabs/style';
  import List from "./subshops/List";
  import Comments from "./subshops/Comments";
    export default {
        name: "Details",
        data(){
          return{
            B:"https://elm.cangdu.org/img/",
            arr:[],
            imgs:"",
            ids:1
          }
        },
        components:{
          Comments,
          List,
          [Tab.name]:Tab,
          [Tabs.name]:Tabs
        },
        methods:{
          fan(){
            this.$router.go(-1)
          },
          onClick(name, title) {
            console.log(name,title);
          },
          huo(){
            console.log("触发进入活动详情页!");
          },

        },
        mounted(){
          this.ids = JSON.parse(localStorage.getItem("detailId"));
          this.axios.get("https://elm.cangdu.org/shopping/restaurant/"+this.ids).then((result)=>{
            this.arr=result.data;
            this.imgs = this.arr.image_path;
          }).catch((err)=>{
            console.log(err);
          });
        }
    }
</script>
<!--https://elm.cangdu.org/shopping/restaurant/1-->
<style scoped>
  @import url("//at.alicdn.com/t/font_1452025_1ydiz1mtqmxi.css");
#Smark{
  width: 100%;
  height: 100%;
  font-size: 16px;
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
}
  .fox{
    height: 6rem;
    display: flex;
    justify-self: left;
    background: rgba(0,0,0,0.5);

  }
  .Dleft{
    width: 6rem;
    height: 6rem;

  }
  .tupian{
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }

  .Dright{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 6rem;

    color: white;
  }
  .r-wz1{
    display: inline-block;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .r-wz2{
    margin-top: 0.3rem;
    margin-left: 0.5rem;
    font-size:0.5rem;
  }

  .r-wz3{
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    font-size:0.5rem;
  }
  .huo{
    width: 2rem;
    height: 6rem;

  }
  .jian{
    color: white;
    font-size: 2rem;
    font-weight: 600;
    line-height: 6rem;
  }
  .daohang{
    width: 100%;
  }
  /*使用深度选择器，将scoped样式中的选择器“深入”，即影响子组件*/
  /deep/ .van-tabs__wrap{
    height: 2rem;
  }
  /deep/ .van-tab{
    line-height: 2rem;
  }
  /deep/ .van-tabs__content{
    font-size: 1rem;
  }
  /deep/ .van-ellipsis{
    font-size: 0.8rem;
  }
 </style>
