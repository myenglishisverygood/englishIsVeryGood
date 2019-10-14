<template>
  <div>
    <nav class="navbar navbar-fixed-bottom navbottom">
      <div class="shou1 x" @click="shou">
        <img :src="e1" alt="" style="width: 1.3rem;height: 1.3rem">
        <p class="shou1-wz">外卖</p>
      </div>
      <div class="shous x" @click="sou">
        <p class="iconfont icon-zhinanzhen wzx p" :class="{yans:yan}"></p>
        <p class="p shous-wz">搜索</p>
      </div>
      <div class="ding1 x" @click="ding">
        <p class="iconfont icon-weibiaoti- wzx p" :class="{yans:yan1}"></p>
        <p class="p shous-wz">订单</p>
      </div>
      <div class="gr1 x" @click="my">
        <p class="iconfont icon-dengluzhanghao wzx p" :class="{yans:yan2}"></p>
        <p class="p shous-wz">我的</p>
      </div>

    </nav>

  </div>
</template>

<script>
  import "../../node_modules/bootstrap/dist/css/bootstrap.css"
    export default {
        name: "foots",
        data(){
          return{
            e1:require('@/assets/image/bottom11.png'),
            a:true,
            yan:false,
            yan1:false,
            yan2:false
          }
        },
        methods:{
           shou(){
             if (this.a){
               this.e1=require('@/assets/image/bottom1.png');
               this.a=false;
             } else if (this.a =!this.a) {
               this.e1=require('@/assets/image/bottom11.png');
             }
              this.$router.push({path:"/home"})
            },
           sou(){
             if (this.a){
               this.a=false;
               console.log("点击跳转到搜索页面!");
               this.yan = true;
             } else if (this.a =!this.a) {
               this.yan = false;
             }
            this.$router.push({path:'/search'})

           },
         ding(){
            if (this.a){

              this.a=false;
              console.log("点击跳转到搜索页面!");
              this.yan1 = true;
            } else if (this.a =!this.a) {
              this.yan1 = false;
            }
            this.$router.push({path:'/dingdan'})
          },
          my(){
            if (this.a){

              this.a=false;
              console.log("点击跳转到搜索页面!");
              this.yan2 = true;
            } else if (this.a =!this.a) {
              this.yan2 = false;
            }
            this.$router.push({path:'/center'})

          }
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
  @import url("//at.alicdn.com/t/font_1452025_1ydiz1mtqmxi.css");
  body,html{
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
  .navbottom{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    background:white;
    border: 1px solid rgb(245,245,245);
  }
  .p{
    line-height:0.8rem;
  }
  .x{
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    /*background: aqua;*/
  }
  .shou1-wz{
    margin-top: 0.2rem;
    font-size: 0.5rem;
    color: #666;
    font-weight: 300;
  }
  .wzx{
    margin-top: 0.3rem;
    font-size: 2rem;

  }
  .yans{
    color: rgb(19,161,255);
  }
  .shous-wz{
    font-size: 0.5rem;
    color: #666;
    font-weight: 300;
  }
</style>
