<template>
  <div class="app">
    <div class="bm">
      <router-link :to="{path:'/accountinfo'}">
        <i class="iconfont icon-zuojian" style="line-height: 2.5rem; font-size: 1rem;color: white"></i>
      </router-link>
      <span class="bmi">编辑地址</span>
      <span class="bian" @click="zt" >{{state}}</span>
    </div>
    <ul v-for="(v,i) in shu" :key="i" class="dong">
      <div class="mmm">
        <li class="vv">{{v.name}}</li>
        <li class="nn">{{v.phone}}</li>
      </div>
      <span @click="sss(i)" class="shan" v-if="ss">x</span>
    </ul>
    <router-link :to="{path:'/pushadd'}">
      <div class="xin">
        <span class="xin1">新增地址</span>
        <i class="iconfont icon-you" style="color: #999;padding-top: 0.6rem"></i>
      </div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: "GetAddress",
    data(){
      return{
        shu:[],
        state:"编辑",
        acc:true,
        ss:true
      }
    },
    methods:{
      aa(){
        var ct=JSON.parse(localStorage.getItem('houw'));
        this.shu=ct;
        console.log(ct)
      },
      sss(index){
        this.shu.splice(index,1);
        localStorage.setItem("houw",JSON.stringify(this.shu));
      },
      zt(){
        if (this.state=='编辑') {
          this.state="完成"
          this.ss=true;
        }else if (this.state=='完成') {
          this.state="编辑"
          this.ss=false

        }
        this.acc=!this.acc;
      }
    },
    created(){
      this.aa();
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1453346_v5w9ntjvvt.css";
  @import "//at.alicdn.com/t/font_1453346_y1nxc20b35h.css";
  .bm{
    background-color: #3190e8;
    z-index: 100;
    width: 100%;
    height: 2.5rem;
    position: relative;
    overflow: hidden;
  }
  .bmi{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 800;
  }
  .bian{
    float: right;
    color: white;
    font-size: 0.9rem;
    padding-top: 0.7rem;
    padding-right: 0.2rem;
  }
  .xin{
    margin-top: .6rem;
    background: #fff;
    padding: .2rem .4rem;
    border-top: 1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;
    height: 3rem;
    border-bottom: 1px solid #d9d9d9;

  }
  .xin1{
    display: block;
    font-size: .9rem;
    color: #666;
    line-height: 3rem;

  }
  .dong{
    border-bottom: 0.02rem solid #999;
    padding: 0.5rem;
    width: 100%;
    color: black;
    background-color: white;
    display: flex;
    justify-content: space-between;
  }
  .shan{
    color: #999;
    padding: 0 0.5rem;
    font-size: 1.5rem;


  }

</style>
