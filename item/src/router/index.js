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
import Search from '../mpMain/Search'
//订单
import Dingdan from '../mpMain/Dingdan'
//余额
import Balance from "../myenglish/balance"
//积分商城
import Integral from "../center/Shop"
//我的优惠
import RedPacket from "../center/RedPacket"
//兑换红包
import Exchange from '../myenglish/Redenvelopes'
//积分
import jifen from '../center/Integration'
//积分说明
import Explain from '../center/Explain'
//服务中心
import Server from '../center/Service'
//服务中心列表
import Context from '../center/Context'
// 登录
import  Login from '../center/Login'
//代金券说明
import Chit from '../center/Chit'
//历史红包
import HistroyRed from '../center/HistoryRed'
//红包说明
import RedEv from '../center/RedEnvelopes'
//推荐有礼
import Prize from '../center/Prize'
//重置密码
import Repassword from '../myenglish/Repassword'
// 用户信息页面
import AccountInfo from '../myenglish/AccountInfo'
// 会员中心
import VipCenter from "../myenglish/VipCenter"
//收货地址
import GetAddress from '../myenglish/GetAddress'
// 新增地址
import Pushadd from '../center/NewAddress'
//兑换会员
import ExchangeVip from '../myenglish/ExchangeVip'

// 店铺详情
import StoreDetail from '../mpMain/Details'
// 修改用户名
import Changeusername from '../myenglish/ChangeUsername'
import Shou from '../mpMain/shou'
//地址搜索
import SuoS from '../center/SuoS'
// 确认订单
import Queren from '../mpMain/qurendingdan'
// 确认订单选择地址
import AddAddress from '../myenglish/AddAddress'
//备注
import BeiZhu from '../mpMain/subshops/dingdanbiezhu'
//店铺详情
import Business from '../center/Business'
//企业认证详情
import Auth from '../center/FoodSupervision'
//倒计时
import SetTim from '../center/OnlinPayment'
//推荐有礼
import TuiJian from '../center/Prize'
//历史红包
import LishiRed from '../center/HistoryRed'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/changecity"},
    {path:"/changecity",component:ChangeCity},
    {path:"/seachadd",component:Address,name:"p"},
    {path:"/home",component:Homepage,name:"j",redirect:"/home/h",children:[
        {path:"/home/h",component:Shou},
        {path:"/home/s",component:Search},
        {path:"/home/dingdan",component:Dingdan},
        {path:"/home/center",component:Center}
      ]},
    {path:'/center',component:Center},
    {path:"/shopclass",component:Shopclass,name:'x'},
    {path:"/download",component:Download},
    {path:"/balance",component:Balance},
    {path:'/integral',component:Integral},
    {path:'/redpacket',component:RedPacket},
    {path:'/exchange',component:Exchange},
    {path:'/integration',component:jifen},
    {path:'/explain',component:Explain,name:'k'},
    {path:'/inter',component:jifen},
    {path:'/search',component:Search},
    {path:'/server',component:Server},
    {path:'/context',component:Context,name:"context"},
    {path:'/login',component:Login},
    {path:'/djq',component:Chit,name:'s'},
    {path:'/hist',component:HistroyRed},
    {path:'/es',component:RedEv,name:'r'},
    {path:'/prize',component:Prize},
    {path:'/repassword',component:Repassword},
    {path:'/accountinfo',component:AccountInfo},
    {path:'/vipcenter',component:VipCenter},
    {path:'/getaddress',component:GetAddress},
    {path:'/pushadd',component:Pushadd,name:'bb'},
    {path:'/exvip',component:ExchangeVip},
    {path:'/storedetail',component:StoreDetail},
    {path:'/changeusername',component:Changeusername},
    {path:'/bSou',component:SuoS},
    {path:'/confirmshop',component:Queren},
    {path:'/addaddress',component:AddAddress},
    {path:'/beizhu',component:BeiZhu},
    {path:'/business',component:Business},
    {path:'/auth',component:Auth},
    {path:'/onlin',component:SetTim},
    {path:'/tuijian',component:TuiJian},
    {path:'/lishired',component:LishiRed}
  ]
})
