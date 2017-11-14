import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/message-center',
            name: 'message-center',
            component: require('@/components/Message/MessageCenter').default
        },
        {
            path: '/client',
            name: 'client',
            component: require('@/components/Client/Client').default,
            children: [
                {
                    path: '/zonglan',
                    name: 'client-zonglan',
                    component: require('@/components/Client/ClientZonglan').default
                },
                {
                    path: '/client-compare',
                    name: 'client-compare',
                    component: require('@/components/Client/ClientIndexCompare').default
                }, {
                    path: '/client-piancha',
                    name: 'client-piancha',
                    component: require('@/components/Client/ClientPianCha').default
                },{
                    path: '/client-detail',
                    name: 'client-detail',
                    component: require('@/components/Client/ClientDetail').default
                },{
                    path: '/client-terminal',
                    name: 'client-terminal',
                    component: require('@/components/Client/ClientTerminalData').default
                },{
                    path: '/caiji-detail',
                    name: 'caiji-detail',
                    component: require('@/components/Client/ClientCaiji').default
                },{
                    path: '/add-celiang',
                    name: 'add-celiang',
                    component: require('@/components/Client/ClientAddCeliang').default
                },{
                    path: '/hetong',
                    name: 'agreement',
                    component: require('@/components/Client/ClientAgreement').default
                },{
                    path: '/user-manager',
                    name: 'user-manager',
                    component: require('@/components/Client/ClientUserManage').default
                },{
                    path: '*',
                    redirect: '/client-detail'
                }
            ]
        },
        {
            path: '/add-hetong',
            name: 'addAgreement',
            component: require('@/components/Client/ClientAddAgreement').default
        },
        {
            path: '/client-situation',
            name: 'client-situation',
            component: require('@/components/Client/ClientSituation').default
        },
        {
            path: '/client-list',
            name: 'client-list',
            component: require('@/components/Client/ClientList').default
        },

        {
            path: '/exmaple',
            name: 'exmaple',
            component: require('@/components/Exmaple').default
        },
        {
            path: '/bid-management',
            name: 'bid-management',
            component: require('@/components/BidManagement').default
        },
        {
            path: '/annual-forecast',
            name: 'annual-forecast',
            component: require('@/components/AnnualForecast').default
        },
        {
            path: '/weather',
            name: 'weather',
            component: require('@/components/Weather').default
        },
        {
            path: '/map',
            name: 'map',
            component: require('@/components/Map').default
        },
        {
            path: '/home',
            name: 'home',
            component: require('@/components/Home').default
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
