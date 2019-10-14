import Vue from 'vue'
import Router from 'vue-router'
//选择城市
import ChangeCity from '../myenglish/ChangeCity'
//具体地址
import Address from '../myenglish/SeachAddress'
//个人中心
import Center from "../center/CenterHome_wy"
//外卖页
import Homepage from "../mpMain/Homepage"
//商家筛选
import Shopclass from "../myenglish/Shopclass"
//下载页面
import Download from "../myenglish/Download"
//搜索
//订单
//余额
import Balance from "../myenglish/balance"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/changecity"},
    {path:"/changecity",component:ChangeCity},
    {path:"/seachadd",component:Address,name:"p"},
    {path:"/center",component:Center},
    {path:"/home",component:Homepage,name:"j"},
    {path:"/shopclass",component:Shopclass,name:'x'},
    {path:"/download",component:Download},
    {path:"/balance",component:Balance}
  ]
})
