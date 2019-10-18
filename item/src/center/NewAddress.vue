<template>
    <div class="wrap">
      <div class="head_top">
        新增地址
        <router-link :to="{path:'/center'}"><span class="glyphicon glyphicon-menu-left" ></span>
        </router-link>
      </div>
      <form>
        <div class="adddetail">
          <div class="input-new">
            <input type="text" placeholder="请填写你的姓名" @input="jinggaoname" v-model="name"/>
            <p v-if="input01" class="jinggao">请填写你的姓名</p>
          </div>
          <div class="input-new">
            <input type="text" placeholder="小区/写字楼/学校等">
          </div>
          <div class="input-new">
            <input type="text" placeholder="请填写详细送餐地址" @input="jinggaoaddress" v-model="address_detail"/>
            <p v-if="input03" class="jinggao">送餐地址太短了,不能辨识</p>
          </div>
          <div class="input-new">
            <input type="text" placeholder="请填写能够联系到您的手机号" @input="phones" v-model="phone"/>
            <p v-if="input04" class="jinggao">请输入正确的手机号</p>
          </div>
          <div class="input-new">
            <input type="text" placeholder="备用联系电话(选填)" @input="phonebf" v-model="phone_bk"/>
            <p v-if="input05" class="jinggao">请输入正确的手机号</p>
          </div>
        </div>
        <div class="addbutton">
          <button>新增地址</button>
        </div>

      </form>
    </div>
</template>

<script>
    export default {
        name: "NewAddress",
      data(){
          return{
            input:[],
            address:"",
            address_detail:"",
            name:"",
            phone:"",
            phone_bk:"",
            //存储p标签的显隐
            input01:false,
            input03:false,
            input04:false,
            input05:false

          }
      },
      methods:{
        jinggaoname(){
          if (this.name==""){
            this.input01=true;
          } else {
            this.input01=false;
          }
        },
        jinggaoaddress(){
          if (this.address_detail.length < 3){
            this.input03=true;
          } else {
            this.input03=false;
          }
        },
        phones(){
          //判断如果值不是正常手机号，出现警示
          if (!(/^1[34578]\d{9}$/.test(this.phone-0))){
            this.input04 = true;
          } else{
            //警示消失
            this.input04 = false;
            //控制确定按钮文字颜色是否点亮
          };
        },
        phonebf(){
          //判断如果值不是正常手机号，出现警示
          if (!(/^1[34578]\d{9}$/.test(this.phone_bk-0))){
            this.input05 = true;
          } else {
            //警示消失
            this.input05 = false;
          }
        },
      },
    }
</script>

<style scoped>
  .head_top{
    background: #3190e8;
    width:100%;
    height:2.9rem;
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
  .adddetail{
    background: #fff;
    padding-top: .4rem;
  }
  .input-new{
    padding-bottom: .6rem;
  }
  .input-new input{
    display: block;
    width: 95%;
    font-size: 1rem;
    margin: 0 auto;
    padding: .5rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  .addbutton{
    margin: .6rem auto;
    width: 95%;
    background: #4cd964;
    border-radius: 3px;
  }
  .addbutton button{
    width: 100%;
    font-size: 1rem;
    color: #fff;
    line-height: 2.6rem;
    background: none;
    font-weight: 800;
    opacity: .6;
  }
  .jinggao{
    font-size: 0.7rem;
    color: #ea3106;
    margin-left: 0.5rem;
    margin-top: 0.2rem;
  }
</style>
