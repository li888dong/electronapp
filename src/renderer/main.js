import Vue from 'vue';
import iView from 'iview';
import {router} from './router/index';
import {appRouter} from './router/router';
import store from './store';
import App from './app.vue';
import '@/locale';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';
import util from './libs/util';

Vue.use(VueI18n);
Vue.use(iView);

// 网络请求配置
import * as api from './Api'
// 引入echarts
import echarts from 'echarts'
// 引入iview
import 'iview/dist/styles/iview.css';
//引入iview-area
import iviewArea from 'iview-area';

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
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    data: {
        currentPageName: ''
    },
    mounted () {
        this.currentPageName = this.$route.name;
        // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
        this.$store.commit('initCachepage');
        // 权限菜单过滤相关
        this.$store.commit('updateMenulist');
        // iview-admin检查更新
        util.checkUpdate(this);
    },
    created () {
        let tagsList = [];
        appRouter.map((item) => {
            if (item.children.length <= 1) {
                tagsList.push(item.children[0]);
            } else {
                tagsList.push(...item.children);
            }
        });
        this.$store.commit('setTagsList', tagsList);
    }
});
