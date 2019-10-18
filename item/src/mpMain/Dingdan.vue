<template>
    <div id="Dmark">
      <nav class="navbar navbar-default a">
        <i class="iconfont icon-jiantou2 suo" style="font-size: 2rem;color: white;" @click="suo"/>
        <div class="kua">
          <span class="wz">{{wz1}}</span>
        </div>
      </nav>
      <foots></foots>
    </div>
</template>

<script>
  import "../../node_modules/bootstrap/dist/css/bootstrap.css"
  import Foots from "./foots";
    export default {
        name: "Dingdan",
      components: {Foots},
      data(){
          return{
            wz1:"订单信息"
          }
        },
        methods:{
          suo(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452025_1ydiz1mtqmxi.css";
  .a{
    background: rgb(49,144,232);
    height: 3rem;
  }
  .suo{
    line-height: 3.2rem;
    margin-left: 1rem;
    vertical-align: 0.5rem;
  }
  .wz{
    display: inline-block;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 100%;
    font-size: 1.3rem;
    color: white;
    font-weight: 600;
  }
  .kua{
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
  #Dmark{
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
</style>
