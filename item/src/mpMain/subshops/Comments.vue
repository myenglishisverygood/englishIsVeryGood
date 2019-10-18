<template>
    <div id="app">
      <ul>
        <!--评分-->
        <li class="res">
          <div class="zuo">
            <p class="h4">{{(res.food_score).toFixed(1)}}</p>
            <p class="zh">综合评价</p>
            <div class="bi">高于周边商家{{Number(res.compare_rating*100).toFixed(1)}}%</div>
          </div>
          <div class="you">
            <div class="youf">服务态度<van-rate v-model="res.overall_score" size="0.8rem" readonly /> <span class="ff">{{(res.overall_score).toFixed(1)}}</span></div>
            <div class="youf">菜品评价<van-rate v-model="res.service_score" size="0.8rem" readonly /> <span class="ff">{{(res.service_score).toFixed(1)}}</span></div>
            <div class="youf">送达时间 <span class="min">分钟</span></div>
          </div>
        </li>
        <!--评论分类-->
        <li class="cls">
          <span @click="bs(v.name)" :class="{cor:isShow==v.name?true:false}" class="bq" v-for="(v,i) in cls" :key="i">{{v.name}}({{v.count}})</span>
        </li>
        <!--具体评论-->
        <li class="pl">
          <div class="dp" v-for="(v,i) in pj" :key="i">
            <img class="user" src="//elm.cangdu.org/img/default.jpg" alt="">
            <span class="username">{{v.username}}</span>
            <div class="xing">
              <van-rate v-model="v.rating_star" size="0.8rem" readonly /><span>{{v.time_spent_desc}}</span>
            </div>
            <span class="tim">{{v.rated_at}}</span>
            <div class="chiimg">
              <img class="chi" src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg" alt="">
              <div class="biaoqian">
              <span class="biao" v-for="(n,i) in v.item_ratings" :key="i">
                {{n.food_name}}
              </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import {Rate} from 'vant'
  import "vant/lib/index.css"
    export default {
        name: "Comments",
        components:{
          [Rate.name]:Rate
        },
      data(){
        return{
          id:1,
          res:{},
          cls:[],
          isShow:'全部',
          pj:[],
        }
      },
      created(){
        this.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+ this.id +'/ratings/scores').then((result)=>{
          this.res = result.data;
          console.log(this.res);
        });

        this.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+ this.id +'/ratings/tags').then((result)=>{
          this.cls = result.data;
          console.log(this.cls);
        });
        this.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+ this.id +'/ratings/?offset=0&limit=10').then((result)=>{
          this.pj = result.data;
          console.log(this.pj);
        });
      },
      methods:{
        bs(name){
          this.isShow = name;
          console.log(this.isShow);
        }
      }
    }
</script>

<style scoped>
 #app{
   width: 100%;
   height: 33.5rem;
   overflow: auto;
   text-decoration: none;
 }
 ul{
   background: rgb(245,245,245);
 }
 .res{
   padding: 0.5rem;
   overflow: hidden;
   border-bottom: 1px solid rgba(0,0,0,0.1);
   margin-bottom: 1rem;
 }
 .zuo{
   width: 40%;
   text-align: center;
   float: left;
 }
 .you{
   margin-top: 1.5rem;
   padding: 0 0.5rem;
   width: 60%;
   float: left;
   box-sizing: border-box;
 }
 .h4{
   font-size: 2rem;
   color: orangered;
 }
 .zh{
   font-size: 1rem;
 }
 .bi{
   color: #999;
   font-size: 0.6rem;
 }
 .min{
   font-size: 0.1rem;
   color: #999;
 }
 .ff{
   color: orangered;
   margin-left: 0.4rem;
 }
 .youf{
   margin-top: 0.15rem;
   font-size: 0.6rem;
 }
 .cls{
   padding: 0.2rem;
   border-top: 1px solid rgba(0,0,0,0.1);
   border-bottom: 1px solid rgba(0,0,0,0.1);
 }
 .bq{
   display: inline-block;
   padding: 0.6rem 0.8rem;
   background: #ebf5ff;
   margin-left: 0.5rem;
   margin-top: 0.5rem;
   border-radius: 5px;
   font-size: 0.6rem;
 }
 .bq:nth-child(3){
   background: #f5f5f5;
   color: #aaa;
 }
 .cor{
   background: #3190e8!important;
   color: white!important;
 }
 .dp{
   height: 6rem;
   padding: 0.5rem;
   border-top: 1px solid rgba(0,0,0,0.1);
   position: relative;
 }
 .user{
   width: 2rem;
   height: 2rem;
   border-radius: 50%;
 }
 .username{
   position: absolute;
   top: 0.3rem;
   left: 3rem;
   font-size: 1rem;
 }
 .xing{
   position: absolute;
   top:1.3rem;
   left: 3rem;
   font-size: 0.7rem;
 }
 .tim{
   position: absolute;
   right: 0.3rem;
   top: 0.3rem;
   color: #999;
   font-size: 0.6rem;
 }
 .chiimg{
   position: absolute;
   top: 2.3rem;
   left: 3rem;
 }
 .chi{
   margin-top: 0.3rem;
   width: 3rem;
   height: 3rem;
 }
 .biao{
   display: inline-block;
   width:5rem;
   border:1px solid rgba(0,0,0,0.1);
   border-radius: 5px;
   white-space:nowrap;
   text-overflow: ellipsis;
   overflow: hidden;
 }
 .biaoqian{
   position: absolute;
   top:-0.8rem;
   left: 15rem;
   font-size: 0.8rem;
 }
 .res,.cls,.dp{
   background: white;
 }
</style>
