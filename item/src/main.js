// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import axios from 'axios'
axios.defaults.withCredentials = true;
import VueAxios from 'vue-axios'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(VueAxios,axios);
import { Switch } from 'mint-ui';
Vue.component(Switch.name, Switch);
Vue.config.productionTip = false
// axios.defaults.withCredentials = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
