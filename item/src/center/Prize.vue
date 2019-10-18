<template>
    <div class="wrap">
      <div class="head-top">
       推荐有奖
        <router-link :to="{path:'/redpacket'}"><span class="glyphicon glyphicon-menu-left"></span></router-link>
      </div>
      <div class="activity">
        <img src="./img/activity.png" height="457" width="750"/>
      </div>
      <div class="invite">
      <div class="invite_style" @click="down=true">
        <img src="./img/微信 分享页.png" height="200" width="200"/>
        <p>微信邀请好友</p>
      </div>
      <div class="invite_style" @click="down=true">
        <img src="./img/qq 分享页.png" height="200" width="200"/>
        <p>QQ邀请好友</p>
      </div>
      <div class="invite_style" @click="down=true">
        <img src="./img/yqgm面对面分享.png" height="200" width="200"/>
        <p>面对面邀请</p>
      </div>
        <div class="pop bounceIn" v-if="down">
          <div class="raw">
            <span class="ver"></span>
            <span class="poi"></span>
          </div>
          <p>请在饿了么APP中打开</p>
          <div class="confrim" @click="down=false">确认</div>
        </div>
      </div>
      <div class="invite_num">
        <div class="invite_num_style">
          <p>累计收益</p>
          <p><span>0</span>元</p>
        </div>
        <div class="invite_num_style people">
          <p>成功邀请</p>
          <p><span class="person">0</span>人</p>
        </div>
      </div>
      <p class="income">-收益明细-</p>
      <div class="income_tips">
        <img src="./img/收益.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "Prize",
      data(){
          return{
            down:false,
          }
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
  .activity img{
    width: 100%;
    height: 15rem;
  }
  .invite{
    display: flex;
    padding: 1rem 0;
    background-color: #fff;
  }
  .invite_style{
    flex: 1;
    text-align: center;
  }
  .invite_style img{
    width: 3rem;
    height: 3rem;
  }
  .invite_num{
    display: flex;
    margin-top: 1rem;
    font-size: .5rem;
    color: #666;
  }
  .invite_num_style{
    flex: 1;
    text-align: center;
  }
  .invite_num_style p{
    color: #999;
    font-size: 1rem;
  }
  .invite_num_style span{
    color: orangered;
    font-size: 1.3rem;
    font-weight: 800;
  }
  .people{
    border-left: .025rem solid #ddd;
  }
  .people span{
    font-size: 1.3rem;
    color: #666;
    font-weight: 800;
  }
  .income{
    text-align: center;
    margin-top: 1rem;
   font-family: Helvetica Neue,Tahoma,Arial;;
  }
  .income_tips{
    text-align: center;
    margin-top: 1rem;
  }
  .income_tips img{
    width: 4rem;
    height: 4rem;
  }
  .pop{
    background: white;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 1rem;
    border-radius: 0.6rem;
    position: absolute;
    top: 32%;
    left: 12%;
  }
  .raw{
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    border: 0.2rem solid rgb(76,217,100);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1.2rem;
  }
  .ver{
    width: 0.18rem;
    height: 2rem;
    background: rgb(76,217,100);
  }
  .poi{
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    margin-top: 0.7rem;
    background: rgb(76,217,100);
  }
  .pop p{
    font-size: 1.2rem;
  }
  .confrim{
    background: rgb(76,217,100);
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    color: white;
    height: 2.5rem;
    line-height: 2.5rem;
    font-family: "Microsoft YaHei";
    font-weight: 700;
    border-radius: 0 0 0.6rem 0.6rem;
  }
</style>
