<template>
  <div class="wrap">
    <div class="head-top">
      我的优惠
      <router-link :to="{path:'/home/center'}"><span class="glyphicon glyphicon-menu-left"></span></router-link>
    </div>
    <div class="categroy_title">
      <span class="choose" v-for="(item,index) in itemList" :class="{ 'red-link':index === isActive }"  @click="getItem(item, index)">{{item}}</span>
    </div>

    <div v-if="isFalse" >
      <div class="container">
        <div class="title">
          <p class="txt">有{{len}}个红包即将过期</p>
          <div class="description">
            <img src="./img/说明.png"/>
            <router-link :to="{path:'/es',query:{name:this.ena.hongbaoCaption,va:this.ena.hongbaoContent}}">红包说明</router-link>
          </div>
        </div>
        <ul>
          <li class="list_li" v-for="(v,i) in money" :key="i">
            <div class="list_item">
              <div class="list_item_left">
                <span>￥</span>
                <span>{{v.amount}}</span>
                <span>.</span>
                <span>0</span>
                <p>{{v.description_map.sum_condition}}</p>

              </div>
              <div class="list_item_right">
                <h4>{{v.name}}</h4>
                <p>{{v.end_date}}到期</p>
                <p>{{v.description_map.phone}}</p>
              </div>
              <div class="time_right">{{v.description_map.validity_delta}}</div>
            </div>
          </li>
          <footer class="list_footer">
            <p>限品种:快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
          </footer>
        </ul>
        <router-link :to="{}" class="history_hongbao">
          <span class="check_history">查看历史红包</span>
          <span> ></span>
        </router-link>
      </div>
      <footer class="hongbao_footer">
        <router-link :to="{path:'/exchange'}" class="hongbao_style">兑换红包</router-link>
        <router-link :to="{}" class="hongbao_style">推荐有礼</router-link>
      </footer>
    </div>

    <div v-if="isFalse1" class="chit">
      <p>333333</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RedPacket",
    data() {
      return {
        isActive: 0,
        itemList: ['红包', '商家代金券'],
        isFalse: true,
        isFalse1: false,
        money:{},
        len:"",
        ena:[]

      }
    },
    methods: {
      getItem(data, index) {
        this.isActive = index;  // 把当前点击元素的index，赋值给activeClass
        let con = this.itemList;
        console.log(data);
        for (let i = 0; i < con.length; i++) {
          if (data == con[i]) {
            this.isFalse = false;
            this.isFalse1 = true;
          } else {
            this.isFalse = true;
            this.isFalse1 = false;
          }
        }
      }
    },
    created(){
      this.axios.get("https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0").then((res)=>{
        this.money=res.data;
        console.log(res.data)
        this.len=this.money.length;

      }),
      this.axios.get("https://elm.cangdu.org/v3/profile/explain").then((res)=>{
        this.ena=res.data;
        // console.log(res.data);
         console.log(res.data.hongbaoCaption)
        console.log(res.data.hongbaoContent);
      })
    }
  }

</script>

<style scoped>
  .wrap{
    animation: fae .5s;
    -webkit-animation:fae .5s;
    animation-fill-mode: forwards;
  }
  @keyframes  fae{
    0%{
      opacity: 0;
    }
    25%{
      opacity: 0.2;
    }
    50%{
      opacity: 0.5;
    }
    75%{
      opacity: 0.75;
    }
    100%{
      opacity: 1;
    }
  }
  .head-top{
    width: 100%;
    height: 2.9rem;
    background: #3190e8;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    line-height: 2.55rem;
    color: white;
    font-family: "Microsoft YaHei";
  }
  .glyphicon{
    position: absolute;
    top: 0.7rem;
    left: 0.6rem;
    color: white;
  }
  .categroy_title{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3rem;
    background-color: #fff;
  }
  .choose{
    /*border-bottom-color: #3190e8;*/
    color: #333;
    font-size: 1rem;
  }
  .red-link{
    font-size: 1rem;
    border-bottom:2px solid #3190e8;
    color: #3190e8;

  }
  .container{
    padding-top: 0.7rem;
  }
  .title{
    display: flex;
    justify-content: space-between;
    font-size: .8rem;
    line-height: 2rem;
  }
  .txt{
    color: #666;
  }
  .description{
    display: flex;
    align-items: center;
  }
  .description img{
    width: .8rem;
    height: .8rem;
    margin-right: .2rem;
  }
  ul{
    list-style: none;
  }
  .list_li{
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAIBAMAAAALs8LeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURUxpcf9TQf9aS/9TQP9TQP9TQv9TQf9UQP9bSP9TQCdGiZQAAAAJdFJOUwBPEZzKPX2/HKJFz58AAAAkSURBVAjXY5gJBwzEMScHNXpCmQIMDMwQ5jQGIKgEMyeBmJIAtqcnWdDMwKsAAAAASUVORK5CYII=) repeat-x;
    background-size: .6rem .3rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
    height: 5.8rem;
  }
  .list_item{
    display: flex;
    justify-content: space-between;
    padding: 1rem .5rem .8rem;
  }
  .list_item_left{
    font-size: 0;
    border-right: .025rem dotted #ccc;
    flex: 1;
  }
  .list_item_left span{
    font-family: Helvetica Neue,Tahoma,Arial;
  }
  .list_item_left span:first-of-type{
    font-size: .9rem;
    color: #ff5340;
    font-weight: 700;
  }
  .list_item_left span:nth-of-type(2){
    font-size: 1.7rem;
    color: #ff5340;
  }
  .list_item_left span:nth-of-type(3){
    font-size: 1rem;
    color: #ff5340;
    font-weight: 700;
  }
  .list_item_left span:nth-of-type(4){
    font-size: 1rem;
    color: #ff5340;
    font-weight: 700;
  }
  .list_item_left p{
    font-size: .7rem;
    color: #999;
  }
  .list_item_right{
    flex: 2;
    margin-left: 1.5rem;
    line-height: 0.2rem;
  }
  .list_item_right h4{
    font-size: 1rem;
    color: #666;
    margin-left: -.7rem;
  }
  .list_item_right p{
    margin-left: -.8rem;
    font-size: .6rem;
    color: #999;

  }
  .time_right{
    font-size: 1rem;
    color: #ff5340;
    padding-top: 0.5rem;
  }
  .list_footer{
    background-color: #f9f9f9;
    padding: .4rem;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
  .list_footer p{
    list-style-type: disc;
    font-size: .6rem;
    color: #999;
    margin-left: .4rem;
  }
  .history_hongbao{
    padding: .5rem 0 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .history_hongbao span{
    font-size: .8rem;
    color: #999;
    margin-right: .2rem;
  }
  .hongbao_footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    height: 3rem;
  }
  .hongbao_style{
    flex: 1;
    line-height: 3rem;
    text-align: center;
    font-size: 1rem;
    color: #555;
    border-right: 0.1rem solid rgb(245,245,245) ;
  }
</style>
