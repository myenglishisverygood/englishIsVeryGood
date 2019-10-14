import Vue from 'vue'
import Router from 'vue-router'
import ChangeCity from '../myenglish/ChangeCity'
import Address from '../myenglish/SeachAddress'
// import Center from "../center/CenterHome_wy"
import Homepage from "../mpMain/Homepage"
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/changecity"},
    {path:"/changecity",component:ChangeCity},
    {path:"/seachadd",component:Address,name:"p"},
    // {path:"/center",component:Center},
    {path:"/home",component:Homepage,name:"j"}
  ]
})
