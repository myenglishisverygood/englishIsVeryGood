<template>
 <div id="oo">
   <div id="header">
     <span id="span1">ele.me</span>
     <a href="###" id="a1" @click="login">登录/注册</a>
   </div>
   <div id="headernext">
     <div id="headernext1">
       <span id="span2">当前定位城市：</span>
       <span id="span3">定位不准时，请在城市列表中选择</span>
     </div>
     <a href="###" id="headernext2"></a>
   </div>
   <!--热门城市-->
   <div>
     <div class="hotCity">热门城市</div>
     <ul style="overflow: hidden">
       <li class="hotCityList"  v-for="(c,i) in hotCityArr" :key="i">{{c}}</li>
     </ul>
   </div>
   <!--全部城市-->
   <div v-for="(v,index) in cityLetter" :key="index">
     <p class="letter">{{v}}</p>
     <ul style="overflow: hidden;background: white">
       <li v-for="(x,y) in allCityArr[v]" :key="y" class="citylink" @click="cityBtn">{{x.name}}</li>
     </ul>
   </div>
 </div>
</template>

<script>
    export default {
      name: "ChangeCity",
      data(){
        return{
          // 储存热门城市的数组
          hotCityArr:[],
          // 所有城市开头字母的数组
          cityLetter:[],
          // 储存所有城市的数组
          allCityArr:[]
        }
      },
      methods:{
        // 所有城市的点击事件
        cityBtn(){},
        // 登陆注册点击事件
        login(){}
      },
      // 创建之后发起网络请求 获取城市信息
      created(){
        // 发起网络请求获取热门城市列表
        this.axios.get("https://elm.cangdu.org/v1/cities?type=hot").then((response)=>{
          let hC = response.data;
          hC.forEach((i)=>{
            this.hotCityArr.push(i.name)
          });
        });
        // 发起网络请求获取所有城市列表
        this.axios.get("https://elm.cangdu.org/v1/cities?type=group").then((res)=>{
          // 字母 A-Z 排序
          this.allCityArr = res.data;
          this.cityLetter = Object.keys(res.data).sort();
        })
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
  html,body{
    width: 100%;
    height: 100%;
    /*background: #F5F5F5;*/
    font-size: 16px;
  }
  #oo{
    width: 100%;
    height: 100%;
  }
  #header{
    width: 100%;
    height: 7%;
    background: #3190E8;
    color: white;
    border-bottom: 0.05rem solid #999999;
  }
  #headernext2{
    display: inline-block;
    width: 100%;
    height: 1.7rem;
  }

  #span1{
    display: inline-block;
    font-size: 1.2rem;
    margin: 0.6rem 0 0 0.5rem;
  }
  #a1{
    float: right;
    display: inline-block;
    font-size: 1.1rem;
    margin: 0.7rem 0.7rem 0 0;
    text-decoration: none;
    color: white;
  }
  #headernext{
    width: 100%;
    height: 12%;
    background: white;
    margin-bottom: 0.6rem;
    border-bottom: 0.1rem solid rgb(228,228,228);
  }
  #headernext1{
    width: 100%;
    height: 50%;
    border-bottom: 0.05rem solid rgb(228,228,228);
  }
  #span2{
    display: inline-block;
    font-size: 0.7rem;
    color: #666666;
    margin: 0.8rem 0 0 0.5rem;
  }
  #span3{
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 900;
    color: #9f9f9f;
    margin: 0.8rem 0.5rem 0 0;
    float: right;
  }
  .hotCity{
    padding: 0.5rem 0.5rem 0.3rem 0.5rem;
    font-size: 0.8rem;
    background: white;
    border-top: 0.1rem solid rgb(228,228,228);
    border-bottom: 0.01rem solid rgb(228,228,228);
  }
  .hotCityList{
    background: white;
    width: 25%;
    font-size: 0.9rem;
    float: left;
    list-style: none;
    text-align: center;
    color: #3190e8;
    height: 2.5rem;
    line-height: 2.5rem;
    border-bottom: 0.05rem solid #e4e4e4;
    border-right: 0.05rem solid #e4e4e4;
    box-sizing: border-box;
  }
  .citylink{
    background: white;
    float: left;
    width: 25%;
    list-style: none;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 0.05rem solid #e4e4e4;
    border-right: 0.05rem solid #e4e4e4;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 0.9rem;
  }
  .letter{
    background: white;
    height: 2rem;
    line-height: 2rem;
    padding-left: 1rem;
    margin: 0;
    border-bottom: 0.05rem solid #e4e4e4;
    border-top: 0.1rem solid #e4e4e4;
    font-size: 0.9rem;
  }
</style>
