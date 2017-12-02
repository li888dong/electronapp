import Vue from 'vue'
import axios from 'axios'


//引入富文本编辑器插件
// import VueKindEditor from 'vue-kindeditor'
// import 'kindeditor/kindeditor-all-min.js'
// import 'kindeditor/themes/default/default.css'
// 引入echarts
import echarts from 'echarts'
// 引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import App from './App'
import router from './router'
import store from './store'

import MyTab from './components/Tool/MyTab.vue'
// 重置iVew样式
import '../../static/resetIview/myIview.css'
// 引入mock测试数据


import '../../static/normalize.css'
import '../../static/font/iconfont.css'
import '../../static/dateformat'

Vue.use(iView);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component({
    'my-tab':MyTab
});
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
