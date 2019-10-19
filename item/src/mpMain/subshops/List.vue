<template>
  <div>
    <span>{{ben}}</span>
    <div class="Lmark">
      <!--左侧导航栏-->
      <div class="L-left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item :title="v.name" :info="null" v-for="(v,i) in bang" :key="i" @click="onList(i)"/>
        </van-sidebar>
      </div>
      <!--右侧内容区域(食品)-->
      <div class="L-right">
        <div v-for="(v,i) in foots" :key="i" :id="'t'+i">
          <div class="nei-to">
            <span class="nei-towz">{{v.name}}</span>
            <span class="nei-towz2">{{v.description}}</span>
          </div>
          <div v-for="(v1,i1) in v.foods" :key="i1">
            <van-card
              :price="v1.specfoods[0].price"
              :desc="v1.description"
              :title="v1.name"
              :thumb="B+v1.image_path"
            >

              <div slot="tags">
                <van-tag mark type="success" class="xin" v-if="v1.attributes[0] != undefined">新品</van-tag>
                <span class="xl">月售{{v1.month_sales}}份 好评率{{v1.satisfy_rate}}%</span>
                <van-tag plain round type="warning" class="zhopai" v-if="v1.attributes[1] != null">
                  {{v1.attributes[1].icon_name}}
                </van-tag>
              </div>
              <div slot="tags" v-if="v1.activity != null">
                <van-tag plain round type="warning">{{v1.activity.image_text}}</van-tag>
              </div>

              <div slot="footer">
                <van-stepper :key="i1" :value="v1.is_featured" min="0" @change="shu($event,i,i1,v1.specfoods[0].price,v1.name)" @plus="jia(i,i1,v1.specfoods[0].price,v1.name)" @minus="jian(i,i1,v1.specfoods[0].price,v1.name)" integer disable-input v-if="v1.is_featured != 0"/>
                <span class="iconfont icon-jiahao jia" v-if="v1.is_featured == 0" @click="jia1(i,i1,v1.specfoods[0].price,v1.name)"></span>
              </div>
            </van-card>
          </div>
        </div>
      </div>

    </div>
    <!--底部-->
    <van-action-sheet v-model="show" title="购物车">
      <ul class="gonei">
        <li v-for="(v,i) in go" :key="i" class="goh">
          <span class="gohspan">{{v.name}}</span>
          <span class="goq">￥{{v.price}}</span>
          <i class="iconfont icon-jian goj" @click="gon1(v.i1,v.name,v.price,v.i)"></i>
          <span class="goshu">{{v.count}}</span>
          <i class="iconfont icon-anonymous-iconfont1 gojia" @click="gon2(v.i1,v.name,v.price,v.i)"></i>
        </li>
      </ul>
    </van-action-sheet>
    <div class="foot">
      <div>
        <div class="cart" @click="tan"><i class="iconfont icon-gouwuche"></i></div>
        <div>
          <div class="cir">{{carshu}}</div>
        </div>
        <div class="allp">
          <span class="price">￥{{mo}}.00</span>
          <div class="sprice">配送费￥5</div>
        </div>
        <router-link class="sbtn" :to="{}"><span class="js" v-if="mo>=20">去结算</span></router-link>
        <router-link class="sbtn1" :to="{}" v-if="mo<20"><span class="js">还差￥20元起送</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {Sidebar, SidebarItem, Card, Stepper, Tag, ActionSheet} from 'vant';
  import 'vant/lib/index.css';

  export default {
    name: "List",
    data() {
      return {
        activeKey: 0,
        B: "https://elm.cangdu.org/img/",
        bang: [],
        foots: [],
        show:false,
        mo:0,
        go:[],
        idr:1,
        carshu:0
      }
    },
    components: {
      [Sidebar.name]: Sidebar,
      [SidebarItem.name]: SidebarItem,
      [Card.name]: Card,
      [Stepper.name]: Stepper,
      [Tag.name]: Tag,
      [ActionSheet.name]: ActionSheet
    },
    methods: {
      onList(ids) {
        console.log(ids);
        //点击根据获取的下标值进行页面内部位置的跳转且不改变URL地址栏内的值
        let id = "#t"+ids;
        document.querySelector(id).scrollIntoView(true);

      },
      //数值发生变化时触发的事件
      shu(e,i,i1,q,n) {
        // console.log(e);
        if (e == 0){
          this.foots[i].foods[i1].is_featured = 0;
        }
      },
      //点击加号时触发的事件
      jia(i,i1,q,n){
        this.foots[i].foods[i1].is_featured +=1;
        this.carshu+=1;
        // console.log(i, i1, q);
        this.mo+=q;
        let arr = {name:n,price:q,count:0,i:i,i1:i1};
        // console.log(n);
        {
          let j;
          for (j = 0; j < this.go.length; j++) {
            if (this.go[j].name == n) {
              this.go[j].count++;
            }
          }
          console.log(j);
          if (j>this.go.length){
            this.go.push(arr);
          }
        }
        console.log(this.go);
      },
      //第一次点击加号触发的事件
      jia1(i,i1,q,n) {
        this.carshu+=1;
        // console.log(i,i1);
        this.foots[i].foods[i1].is_featured = 1;
        this.mo+=q;
        // this.go.push({name:n,price:q,count:1,i:i,i1:i1});

        this.go.push({name:n,price:q,count:1,i:i,i1:i1});
        console.log(this.go);
      },
      //点击减号触发的事件
      jian(i,i1,q,n){
        this.foots[i].foods[i1].is_featured -=1;
        // console.log(i, i1, q);
        this.mo-=q;
        this.carshu-=1;
        {
          let j;
          for (j = 0; j < this.go.length; j++) {
            if (this.go[j].name == n) {
              this.go[j].count--;
              if (this.go[j].count == 0){
                this.go.splice(j,1);
                this.foots[i].foods[i1].is_featured = 0;
              }
            }
          }
          console.log(this.go);
        }

      },

      //购物车内部
      gon1(i1,n,q,i){
        console.log(i1,n,q,i);
        this.jian(i,i1,q,n);
      },
      gon2(i1,n,q,i){
        console.log(i1,n,q,i);
        this.jia(i,i1,q,n);
      },
      //点击购物车图标弹出上拉框
      tan(){
        this.show=!this.show;
      }
    },

    //@@创建后请求数据
    created() {
      this.idr = JSON.parse(localStorage.getItem("shopId"))
      //左侧导航栏列表请求
      this.axios.get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+this.idr).then((result) => {
        // console.log(result.data);
        this.bang = result.data;
        // console.log(this.bang);
      }).catch((err) => {
        console.log(err);
      });
      // 右边食物列表内容请求
      this.axios.get("https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+this.idr).then((result) => {

        // console.log(result.data);
        this.foots = result.data;
        console.log(this.foots[0].foods);
      }).catch((err) => {
        console.log(err);
      });

    },
    computed:{
       ben(){
         if (this.go.length != 0){
           localStorage.setItem("h1",JSON.stringify(this.go));
         }

       },
    }

  }
</script>

<style scoped>
  @import url("//at.alicdn.com/t/font_1452025_d50uqytxop.css");

  .Lmark {
    width: 100%;
    overflow: hidden;
  }

  .van-sidebar {
    width: 5.2rem;
  }

  .van-sidebar-item {
    font-size: 0.8rem;
    line-height: 1.1rem;
    border-left-width: 0.2rem;
    padding: 1.2rem 0.9rem 1.2rem 0.6rem;
  }

  >>> .van-info {
    min-width: 1rem;
    font-size: 0.8rem;
    line-height: 0.9rem;
  }

  .van-sidebar-item--select {
    border-color: #3190e8;
  }

  .L-left {
    height: 30rem;
    float: left;
    width: 5rem;
    overflow: auto;
  }

  .L-right {
    height: 30rem;
    float: right;
    width: 18rem;
    /*background: green;*/
    overflow: auto;
  }

  .nei-to {
    height: 2.2rem;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
  }

  .nei-towz {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    color: #666666;
    font-weight: bold;
  }

  .nei-towz2 {
    margin-left: 0.5rem;
    font-size: 0.5rem;
    color: #666666;
  }

  .van-card:not(:first-child) {
    margin-top: 0;
  }

  .van-card {
    background-color: white;
    font-size: 0.75rem;
    padding: 0.8rem 1rem;
  }

  >>> .van-card__thumb {
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
  }

  .van-card__content {
    min-height: 5.625rem;
  }

  .van-card__title {
    color: black;
    font-size: 1rem;
    font-weight: 600;
    max-height: 2rem;
    line-height: 1rem;
  }

  .van-card__desc {
    line-height: 1.25rem;
    max-height: 1.25rem;
  }

  >>> .van-stepper__minus {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.2rem;
    border-radius: 50%;
    color: #3190e8;
    font-weight: 600;
    border: 0.1rem solid #3190e8;
    background-color: white;
  }

  >>> .van-stepper__input {
    color: black;
    background-color: white;
    font-size: 1rem;
    width: 2rem;
    height: 1.5rem;
  }

  /deep/ .van-stepper__plus::after {
    width: 0.1rem;
    height: 0.8rem;
  }

  /deep/ .van-stepper__plus::before {
    width: 0.8rem;
    height: 0.1rem;
  }

  /deep/ .van-stepper__minus::before, .van-stepper__plus::before {
    width: 0.8rem;
    height: 0.1rem;
  }

  /deep/ .van-stepper__plus {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.2rem;
    border-radius: 50%;
    color: #3190e8;
    font-weight: 600;
    border: 0.1rem solid #3190e8;
    background-color: white;
  }

  .van-card__tag {
    top: -0.8rem;
  }

  >>> .van-tag--danger {
    background-color: green;
    font-size: 0.5rem;
  }

  >>> .van-tag {
    font-size: 0.8rem;
  }

  >>> .van-card__bottom {
    line-height: 1.25rem;
  }

  >>> .van-card__price {
    margin-top: 0.2rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .zhopai {
    position: absolute;
    top: 0;
    left: 11rem;
  }

  .jia {
    font-size: 1rem;
    color: #3190e8;
  }

  .xin {
    position: absolute;
    top: -0.8rem;
    left: -4.5rem;
    font-size: 0.8rem;
  }

  .foot{
    width: 100%;
    height: 3.5rem;
    background: #333;
    position: fixed;
    z-index: 20191;
    bottom: 0;
    left: 0;
    color: white;
    box-sizing: border-box;
  }
  .foot>div{
    position: relative;
  }
  .price{
    font-size: 1rem;
  }
  .cart{
    width: 3rem;
    height: 3rem;
    background: #3190e8;
    position: absolute;
    left: 1rem;
    top: -0.6rem;
    text-align: center;
    border-radius: 50%;
    border: 0.2rem solid #333;
    line-height: 2rem;
  }
  .icon-gouwuche{
    font-size: 1.5rem;
  }
  .cir{
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background: orangered;
    border-radius: 50%;
    left: 2.6rem;
    top: -0.8rem;
    font-size: 0.6rem;
  }
  .allp{
    position: absolute;
    top: 0.3rem;
    left: 5rem;
  }
  .sprice{
    font-size: 0.6rem;
  }
  .sbtn{
    display: inline-block;
    position: absolute;
    right: 0;
    color: white;
    line-height: 3.5rem;
    box-sizing: border-box;
    padding: 0.2rem 2rem;
    background: #4cd964;
    text-decoration: none;
  }
  .sbtn1{
    display: inline-block;
    position: absolute;
    right: 0;
    color: white;
    line-height: 3.5rem;
    box-sizing: border-box;
    padding: 0.2rem 2rem;
    background: rgb(83,83,86);
    text-decoration: none;
  }
  .js{
    font-size: 1rem;
    font-weight: 600;
  }
  .van-popup--bottom.van-popup--round{
    border-radius: 0;
    margin-bottom: 3.6rem;
  }
  .van-action-sheet__header{
    font-weight: 500;
    font-size: 1rem;
    line-height: 2.75rem;
    text-align: left;
    padding-left: 0.5rem;
    background: rgb(236,239,241);
  }
  .van-action-sheet__close{
    padding: 0 0.8rem;
    font-size: 1.2rem;
  }
  >>>.van-overlay{
    background: rgba(0,0,0,0.1);
  }
  .gonei{
    background: white;
    font-size: 1rem;
  }
  .goh{
    height: 2.5rem;
    border-bottom: 0.05rem solid rgb(236,239,241);
  }
  .gohspan{
    display: inline-block;
    margin-top: 0.6rem;
    margin-left: 1rem;
    font-weight: bold;
    width: 8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goq{
    vertical-align: 0.2rem;
    display: inline-block;
    margin-left: 5rem;
    font-weight: bold;
    color: orangered;
  }
  .goshu{
    vertical-align: 0.25rem;
    font-size: 0.8rem;
    margin: 0 .1rem;
  }
  .goj{
    vertical-align: 0.2rem;
    font-size: 1.2rem;
    margin-left: 1.8rem;
  }
  .gojia{
    vertical-align: 0.2rem;
    font-size: 1.2rem;
  }
</style>
