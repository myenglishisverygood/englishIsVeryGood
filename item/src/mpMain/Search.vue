<template>
  <div id="mark">
    <nav class="navbar navbar-default a">
      <i class="iconfont icon-jiantou2 suo" style="font-size: 2rem;color: white;" @click="suo"/>
      <div class="kua">
        <span class="wz">{{wz1}}</span>
      </div>
    </nav>
    <div>
      <van-search
        v-model="value"
        placeholder="请输入商家或美食信息"
        show-action
        shape="square"
        left-icon=""
        @search="onSearch"
        @clear="onclear"
      >
        <div slot="action" @click="onSearch" class="rbut">提交</div>
      </van-search>
      <div class="link-t">
        <p class="wz1">{{wz}}</p>
      </div>
      <ul v-if="!show">
        <li class="link2">
          <div class="zuo">
            <img :src="B+'16c0a0e0dd949473.jpg'" alt="" style="width: 3rem;height: 3rem" class="img1">
          </div>
          <div class="you">
            <div class="onewz">
              <span>肯德基(中山公园店)</span><span class="zhifu">支付</span>
            </div>
            <div class="two-s1"><span>月销售 547 单</span></div>
            <div class="three-s1"><span>20 元起送 / 距离1950公里</span></div>
          </div>
        </li>
      </ul>
      <ul v-if="show">
        <li class="lswz" v-for="(v,i) in history" :key="i">
          <span class="lswz-1"  @click="tian(v,i)">{{v}}</span><span class="qc" @click="dele(i)">X</span>
        </li>
        <li class="foot-wz" @click="qingkong"><span class="foot-wzs">清空搜索历史</span></li>
      </ul>
    </div>
  </div>
</template>

<script>

  import Search from 'vant/lib/search';
  import "../../node_modules/bootstrap/dist/css/bootstrap.css"
  import 'vant/lib/search/style';
  import Header from "./Header";
  import Foots from "./foots";

  export default {
    name: "Search",
    data() {
      return {
        value: "",
        x: "31.22967,121.4762",
        wz: "搜索历史",
        B: "https://elm.cangdu.org/img/",
        wz1: "搜索",
        show: true,
        his: [],
        history: []
      }
    },
    components: {
      Foots,
      Header,
      [Search.name]: Search
    },
    methods: {
      onSearch() {
        if (this.value != "") {
          if (!localStorage.getItem("searchHistory")) {
            this.his.push(this.value);
          } else {
            this.his = JSON.parse(localStorage.getItem("searchHistory"));
            this.his.push(this.value);

          }
          localStorage.setItem("searchHistory", JSON.stringify(this.his));

          this.wz = '商家'
          this.axios.get("https://elm.cangdu.org/v4/restaurants", {
            params: {
              geohash: this.x,
              keyword: "肯德基"
            }

          }).then((result) => {
            console.log(result.data);
          }).catch((err) => {
            console.log(err);
          });
          this.show = false;
        } else {
          console.log("点击事件!", this.value);


        }

      },
      onclear() {
        console.log("点击事件!", this.value);
        this.wz = '搜索历史'
        this.show = true;
        this.history = JSON.parse(localStorage.getItem("searchHistory"));
      },
      suo() {
        this.$router.push({path: '/home'})
      },
      dele(i) {
        console.log('删除');
        this.history.splice(i, 1)
        let arry = JSON.parse(localStorage.getItem("searchHistory"));
        arry.splice(i, 1);
        localStorage.setItem("searchHistory", JSON.stringify(arry))
      },
      tian(v,i){
        console.log("添加");
        this.value=v;
        this.dele(i);
      },
      qingkong(){
        this.his=[];
        localStorage.setItem("searchHistory", JSON.stringify(this.his));
        this.history=[];
        }
    },
    created() {
      this.history = JSON.parse(localStorage.getItem("searchHistory"));
    },

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
  @import "//at.alicdn.com/t/font_1452025_1ydiz1mtqmxi.css";

  .a {
    background: rgb(49, 144, 232);
    height: 3rem;
  }

  .suo {
    line-height: 3.2rem;
    margin-left: 1rem;
    vertical-align: 0.5rem;
  }

  .wz {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 1.3rem;
    color: white;
    font-weight: 600;
  }

  .kua {
    display: inline-block;
    /*border: 1px solid white;*/
    margin-left: 3.5rem;
    width: 10rem;
    height: 2.5rem;
    margin-top: 0.5rem;
    overflow: hidden;
    text-align: center;
    padding-top: 0.2rem;
  }

  #mark {
    width: 100%;
    height: 100%;
    font-size: 16px;
    list-style: none;
  }

  /*.mark1{*/
  /*margin-top: 3.2rem;*/
  /*}*/
  .rbut {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 2.5rem;
    background: #3190e8;
    color: white;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: 600;
  }

  .van-cell {
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    background: rgb(242, 242, 242);
  }

  .link-t {
    height: 3rem;
    background: rgb(242, 242, 242);
    font-size: 0.9rem;
    font-weight: 600;
    color: black;
  }

  .wz1 {
    line-height: 3rem;
    margin-left: 0.8rem;
  }

  .link2 {
    height: 6rem;
    display: flex;
    justify-self: left;
    padding-top: 0.6rem;
    margin-left: 0.5rem;
  }

  .zuo {
    width: 3.5rem;
    height: 100%;
  }

  .you {
    width: 100%;
    height: 4.5rem;
    font-size: 0.8rem;
    color: #333333;
    border-bottom: 0.05rem solid rgba(0, 0, 0, 0.5);
  }

  .zhifu {
    margin-left: 0.5rem;
    color: rgb(255, 96, 0);
    font-size: 0.5rem;
    font-weight: bold;
    border: 0.05rem solid rgb(255, 96, 0);
  }

  .onewz {
    margin-left: 0.3rem;
    margin-top: 0.2rem;
  }

  .two-s1 {
    margin-top: 0.3rem;
    margin-left: 0.2rem;
  }

  .three-s1 {
    margin-left: 0.2rem;
    margin-top: 0.3rem;
  }

  .lswz {
    height: 2.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    border-bottom: 0.05rem solid rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  .lswz-1 {
    float: left;
    line-height: 2.5rem;
    margin-left: 0.5rem;
  }
  .qc{
    line-height: 2.5rem;
    height: 2.5rem;
    width: 1rem;
    float: right;
    margin-right: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: black;
  }
  .foot-wz{
    height: 2.5rem;
    text-align: center;
  }
  .foot-wzs{
    font-family: "楷体";
    color: #3190e8;
    line-height: 2.5rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
</style>
