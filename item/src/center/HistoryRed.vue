<template>
  <div class="wrap">
    <div class="head-top">
      历史记录
      <router-link :to="{}"><span class="glyphicon glyphicon-menu-left"></span></router-link>
    </div>
    <div class="scroll">
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
              <img src="./img/已过期.png"/></div>
            <footer class="list_item_footer">
              <p>限品类:小吃夜宵</p>
            </footer>

          </li>
        </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RedPacket",
    data() {
      return {
        money:{},

      }
    },
    created(){
      this.axios.get("https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0").then((res)=>{
        this.money=res.data;
        console.log(res.data)
        this.len=this.money.length;

      })

    }
  }

</script>

<style scoped>
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
  .description img{
    width: .8rem;
    height: .8rem;
    margin-right: .2rem;
  }
  .scroll{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 3rem;
    margin: 0 auto;
  }
  ul{
    list-style: none;
  }
  .list_li{
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAAAXNSR0IArs4c6QAAAHtJREFUKBVjvHv37n8GKgImKpoFNmoYGcjIyAgK6+VA2o6FhUWInZ1dlomJKQDIP40cbIzERApQ01+g5jAFBYV1yJpB7P///zPev39/IpDOBfGJDcNGbIaBDAC5XFFRsQBIHwDxCRoIVPidmZl5CkgxLgBU8w/owl6QPABvmyDiDQUF7gAAAABJRU5ErkJggg==) repeat-x;
    background-size: .6rem .3rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
    /*height: 5.8rem;*/
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
    color: #ccc;
    font-weight: 700;
  }
  .list_item_left span:nth-of-type(2){
    font-size: 1.7rem;
    color: #ccc;
  }
  .list_item_left span:nth-of-type(3){
    font-size: 1rem;
    color: #ccc;
    font-weight: 700;
  }
  .list_item_left span:nth-of-type(4){
    font-size: 1rem;
    color: #ccc;
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
  .list_item img{

    width: 3rem;
    height: 3rem;

  }

  .list_footer p{
    list-style-type: disc;
    font-size: .6rem;
    color: #999;
    margin-left: .4rem;
  }
  .history_hongbao span{
    font-size: .8rem;
    color: #999;
    margin-right: .2rem;
  }
  .list_item_footer{
    background-color: #f9f9f9;
    padding: .4rem;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
.list_item_footer p{
  list-style-type: disc;
  font-size: .4rem;
  color: #999;
  margin-left: .4rem;
}
</style>
