import Vue from 'vue'

// 网络请求配置
import axios from 'axios'
import * as api from './Api'
import {ipcRenderer,shell} from 'electron';

let instance,
    token = store.getters.access_token;
if (!token){
    axios.post('http://192.168.2.111/oauth/token',{
        grant_type:'client_credentials',
        client_id:1,
        client_secret:'IRwipTloBj54dYeznekQt2shYHaTrmeIIRXq0bQb',
        scope:''

    }).then(res=>{
        console.log('令牌请求成功',res);
        store.dispatch('setToken',res.data.access_token);
        instance = axios.create({
            headers:{
                common:{
                    Authorization:res.data.access_token
                }
            },
            baseURL:"http://192.168.2.111/",
            timeout:10000
        });
        Vue.http = Vue.prototype.$http = instance;
        // ipcRenderer.send('login-failed');
        // router.push('login')
    },err=>{
        ipcRenderer.send('login-failed');
        router.push('login');
        console.log(err)
    });

}else {
    ipcRenderer.send('login-success');
}

// 引入echarts
import echarts from 'echarts'
// 引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
//引入iview-area
import iviewArea from 'iview-area';

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
Vue.use(iviewArea);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.api = Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component('my-tab',MyTab);
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
