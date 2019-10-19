<template>
    <div class="service">
      <div class="head-top">
        服务中心
        <router-link :to="{path:'/home/center'}"><span class="glyphicon glyphicon-menu-left"></span></router-link>
      </div>
   <div class="customer">
     <router-link :to="{}" class="customer_zx">
       <img src="./img/在线客服.png"/>
       <p>在线客服</p>
     </router-link>
     <router-link :to="{}" class="customer_zx">
       <img src="./img/电  话.png"/>
       <p>在线客服</p>
     </router-link>
   </div>
      <div class="question ">
        <p id="hot">热门问题</p>
        <ul>
          <router-link v-for="(v, i) in ccc" :key="i" :to="{name:'context',params:{name:v, c:cc[i]}}">
            <li id="Cli">
              <span id="con">{{v}}</span>
              <span id="link"> > </span>
            </li>
          </router-link>
        </ul>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Service",
      data() {
        return {
          products: [],
          con: [],
          ccc: [],
          cc: []
        }
      },
      created() {
        this.axios.get("https://elm.cangdu.org/v3/profile/explain").then((response)=>{
          this.products = response.data;
          let keyArr = Object.keys(this.products);
          keyArr.splice(keyArr.indexOf("index"), 1);
          for (let i = 0; i < keyArr.length; i += 2) {
            this.ccc.push(this.products[keyArr[i + 1]]);
            this.cc.push(this.products[keyArr[i]]) ;
          }
        }, (err) => {
          console.log(err);
        });
      },




    }
</script>

<style scoped>
  .service{
    width: 100%;
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
  .customer{
    display: flex;
    justify-content: space-between;
    background: white;

  }
  .customer_zx{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 5rem;
    border-bottom: 1px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
  }
  .customer_zx img{
    width: 1.6rem;
    height: 1.6rem;
  }
  .customer_zx span{
    margin-top: .4rem;
    font-size: .6rem;
    color: #666;
  }
  .question{
    background: white;
    width: 100%;
    padding-left: 1rem;
  }
  #hot{
    height: 4rem;
    line-height: 4rem;
    font-size: 1rem;
  }
  #Cli{
    padding: 0 .7rem;
    line-height: 2.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f5f5f5;
  }
  #con,#link{
    color: #666;
    font-size: 1rem;
    font-family: Helvetica Neue,Tahoma,Arial;
  }

</style>
