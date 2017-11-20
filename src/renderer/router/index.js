import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/UserForecast',
            name: 'UserForecast',
            component: require('@/components/Forecast/UserForecast').default
        },
        {
            path: '/MonthForecast',
            name: 'MonthForecast',
            component: require('@/components/Forecast/MonthForecast').default
        },
        {
            path: '/equipment',
            name: 'equipment',
            component: require('@/components/equipment/equipment').default
        },
        {
            path: '/AssetInfo',
            name: 'AssetInfo',
            component: require('@/components/equipment/AssetInfo').default
        },
        {
            path: '/AddClient',
            name: 'AddClient',
            component: require('@/components/Client/AddClient').default
        },
        {
            path: '/ContractManagement',
            name: 'ContractManagement',
            component: require('@/components/ContractManagement/ContractManagement').default
        },
        {
            path: '/AddContractManagement',
            name: 'AddContractManagement',
            component: require('@/components/ContractManagement/AddContractManagement').default
        },
        {
            path: '/EquipmentStatus',
            name: 'EquipmentStatus',
            component: require('@/components/equipment/EquipmentStatus').default
        },
        {
            path: '/EquipmentException',
            name: 'EquipmentException',
            component: require('@/components/equipment/EquipmentException').default
        },
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
                    path: '/client-zonglan',
                    name: 'client-zonglan',
                    component: require('@/components/Client/ClientZonglan').default
                },
                {
                    path: '/client-compare',
                    name: 'client-compare',
                    component: require('@/components/Client/ClientIndexCompare').default
                },
                {
                    path: '/client-piancha',
                    name: 'client-piancha',
                    component: require('@/components/Client/ClientPianCha').default
                },
                {
                    path: '/client-detail',
                    name: 'client-detail',
                    component: require('@/components/Client/ClientDetail').default
                },
                {
                    path: '/client-terminal',
                    name: 'client-terminal',
                    component: require('@/components/Client/ClientTerminalData').default
                },
                {
                    path: '/caiji-detail',
                    name: 'caiji-detail',
                    component: require('@/components/Client/ClientCaiji').default
                },
                {
                    path: '/add-celiang',
                    name: 'add-celiang',
                    component: require('@/components/Client/ClientAddCeliang').default
                },
                {
                    path: '/hetong',
                    name: 'agreement',
                    component: require('@/components/Client/ClientAgreement').default
                },
                {
                    path: '/user-manager',
                    name: 'user-manager',
                    component: require('@/components/Client/ClientUserManagement').default
                },
                {
                    path: '/database',
                    name: 'database',
                    component: require('@/components/Client/PowerDatabase').default
                },
                {
                    path: '/matching-management',
                    name: 'matching-management',
                    component: require('@/components/TradeManagement/MatchingManagement').default
                },
                {
                    path: '*',
                    redirect: '/client-detail'
                }
            ]
        },
        {
            path: '/add-hetong',
            name: 'addAgreement',
            component: require('@/components/Client/ClientAddAgreement').default
        }, {
            path: '/import-data',
            name: 'import-data',
            component: require('@/components/Forecast/ImportData').default
        }, {
            path: '/sand-table',
            name: 'sand-table',
            component: require('@/components/SandTable').default
        }, {
            path: '/index-compare',
            name: 'index-compare',
            component: require('@/components/IndexCompare').default
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
            component: require('@/components/TradeManagement/BidManagement').default
        },
        {
            path: '/changxie-management',
            name: 'changxie-management',
            component: require('@/components/TradeManagement/ChangxieManagement').default
        },
        {
            path: '/trade-situation',
            name: 'trade-situation',
            component: require('@/components/TradeManagement/TradeSituation').default
        },

        {
            path: '/annual-forecast',
            name: 'annual-forecast',
            component: require('@/components/Forecast/AnnualForecast').default
        },
        {
            path: '/weather',
            name: 'weather',
            component: require('@/components/Weather').default
        },{
            path: '/button',
            name: 'button',
            component: require('@/components/Button/Button').default
        },{
            path: '/table',
            name: 'table',
            component: require('@/components/Table/Table').default
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
