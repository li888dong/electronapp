import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/main',
            name: 'mainPage',
            component: require('@/components/MainPage').default,
            children:[
                {
                    path: '/planInfo',
                    name: 'planInfo',
                    component: require('@/components/planInfo').default
                },
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
                    component: require('@/components/ContractManagement/ContractManagement').default,
                    children:[

                        {
                            path: '/ChangxieContract',
                            name: 'ChangxieContract',
                            component: require('@/components/ContractManagement/ChangxieContract').default
                        },
                        {
                            path: '/saleContract',
                            name: 'saleContract',
                            component: require('@/components/ContractManagement/saleContract').default
                        },
                        {
                            path: '/ContractManagement',
                            redirect: '/ChangxieContract'
                        }
                    ]
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
                    component: require('@/components/Message/Message').default,
                    children:[
                        {
                            path:'/',
                            name:'message-center',
                            component:require('@/components/Message/MessageCenter').default,
                        },
                        {
                            path:'/message-send',
                            name:'message-send',
                            component:require('@/components/Message/MessageSend').default,
                        },
                        {
                            path:'/message-detail',
                            name:'message-detail',
                            component:require('@/components/Message/MessageDetail').default,
                        }
                    ]
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
                            path: '/matching-management',
                            name: 'matching-management',
                            component: require('@/components/TradeManagement/MatchingManagement').default
                        },
                        {
                            path: '*',
                            redirect: '/client-zonglan'
                        }
                    ]
                },
                {
                    path: '/database',
                    name: 'database',
                    component: require('@/components/Client/PowerDatabase').default
                },
                {
                    path: '/add-hetong',
                    name: 'addAgreement',
                    component: require('@/components/Client/ClientAddAgreement').default
                },
                {
                    path: '/import-data',
                    name: 'import-data',
                    component: require('@/components/Forecast/ImportData').default
                },
                {
                    path: '/sand-table',
                    name: 'sand-table',
                    component: require('@/components/SandTable').default
                },
                {
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
                    path: '/year-forecast',
                    name: 'year-forecast',
                    component: require('@/components/Forecast/YearForecast').default
                },
                {
                    path: '/weather',
                    name: 'weather',
                    component: require('@/components/Weather').default
                },
                {
                    path: '/button',
                    name: 'button',
                    component: require('@/components/Tool/Button').default
                },
                {
                    path: '/home',
                    name: 'home',
                    component: require('@/components/Home').default
                },
                {
                    path:'*',
                    redirect: '/home'
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: require('@/components/login').default
        },
        {
            path: '*',
            redirect: '/login'
        }
    ]
})
