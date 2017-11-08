import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/client-list',
            name: 'client-list',
            component: require('@/components/ClientList').default
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
