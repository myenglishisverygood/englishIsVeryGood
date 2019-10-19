<template>
    <div class="wrap">
      <div class="head-top">
        在线支付
        <router-link :to="{}" @click.native="ret"><span class="glyphicon glyphicon-menu-left"></span></router-link>
      </div>
      <div class="show_time">
        <div>
          <div class="sy">剩余支付时间</div>
          <van-count-down :time="time" style="font-size: 2rem;margin-top: 1rem" @finish="add"/>
         <p></p>
        </div>
      </div>
      <div class="query">选择支付方式</div>
      <div class="pay_way_list">
        <div class="pay_item">
          <div class="pay_icon">
            <div class="zhifubao"></div>
            <span>支付宝</span>
           </div>
          <van-radio-group v-model="radio">
          <van-radio name="1" checked-color="#07c160"></van-radio>
        </van-radio-group>
        </div>
        <div class="pay_item">
          <div class="pay_icon">
            <div class="weixin"></div>
            <span>微信</span>
            </div>
          <van-radio-group v-model="radio">
            <van-radio name="2" checked-color="#07c160"></van-radio>
          </van-radio-group>
        </div>
      </div>
      <p class="qrzf" @click="yue">确认支付</p>
      <div class="pop bounceIn" v-if="p">
        <div class="raw">
          <span class="ver"></span>
          <span class="poi"></span>
        </div>
        <p class="cty">{{con}}</p>
        <div class="confrim" @click="yin">确认</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "OnlinPayment",
      data() {
        return {
          time: 15*60 *1000,
          radio: '1',
          p: false,
          con: "暂不支持开放功能"
        };
      },
      methods: {
        yue() {
          if (this.p == false) {
            this.p = true;
          }
        },
        ret(){
          this.$router.go(-1)
        },
        yin() {
          if (this.p == true) {
            this.p = false;
            this.con = "当前环境无法支付,请打开官方APP进行付款"
          }
        },
        add(){
          if (this.p == false) {
            this.p = true;
            this.con = "支付超时"
          }
        }

      },
        created() {
          this.p = true;
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
  .show_time{
    background-color: #fff;
    height: 6rem;
    text-align: center;
    overflow: hidden;
  }
  .sy{
    font-size: 1rem;
    color: #666;
    margin-top: 1rem;
  }
  .pay_way_list{
    background-color: #fff;
    height: 10rem;
  }
  .pay_item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .4rem .7rem;
    line-height: 2.6rem;
    border-bottom: .025rem solid #f5f5f5;
  }
  .query{
    background-color: #f1f1f1;
    padding: 0 1rem;
    font-size: 1rem;
    color: #666;
    line-height: 3rem;
  }
  .zhifubao{
    width: 2.5rem;
    height: 2.5rem;
    background:url("./img/zhifubao.png") no-repeat;
    background-size: 100% 100%;
    margin-right: .2rem;
  }
  .weixin{
    width: 2.5rem;
    height: 2.5rem;
    background:url("./img/wei.png") no-repeat;
    background-size: 100% 100%;
    margin-right: .2rem;
  }
  .pay_icon{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    position: relative;
  }
  .pay_icon span{
    font-size: 0.9rem;
    margin-left: 0.4rem;
  }
  .qrzf{
    background-color: #4cd964;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 2.8rem;
    border-radius: .2rem;
    margin-top: .8rem;
    font-weight: 700;
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
    top: 24%;
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
  .cty{
    font-size: 0.8rem;
    color: #333;
    line-height: 1.2rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }

</style>
