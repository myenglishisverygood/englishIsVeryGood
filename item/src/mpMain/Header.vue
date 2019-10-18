<template>
  <nav class="navbar navbar-default navbar-fixed-top a">
          <i class="suo iconfont icon-sousuo" style="font-size: 1.5rem;color: white;" @click="suo"/>
    <div class="kua">
      <span class="wz" @click="ret">{{title}}</span>
    </div>
      <i class="iconfont icon-dengluyonghuming navbar-text pull-right ren" style="font-size: 1.5rem;color: white;" @click="login"/>
  </nav>

</template>

<script>
  import "../../node_modules/bootstrap/dist/css/bootstrap.css"
    export default {
        name: "Header",
        data(){
          return {
            title:""
          }
        },
        created(){
           this.wz1 = this.$route.query.geo
            this.axios.get("https://elm.cangdu.org/v2/pois/" + this.wz1).then((res)=>{
              this.title = res.data.name
            })
        },
        methods:{
          // 搜索点击
          suo(){
            this.$router.push({path:'/search'})
          },
          //登录点击
          login(){
            console.log("点击登录!");
          },
          ret(){
            this.$router.push({path:"/changecity"})
          }
        },
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452025_smu96v29v8l.css";
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
    font-weight: 300;
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
  .ren{
    margin-right: 0.5rem;
    margin-top: 0.6rem;
  }
</style>
