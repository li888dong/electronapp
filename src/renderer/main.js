import Vue from 'vue'
import axios from 'axios'
// 引入echarts
import echarts from 'echarts'

import App from './App'
import router from './router'
import store from './store'

// 引入mock测试数据


import '../../static/normalize.css'
import '../../static/iconfont.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
