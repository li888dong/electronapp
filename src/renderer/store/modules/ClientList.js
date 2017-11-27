const state = {
    currentCity:'zz',
    cityList: {
        zz: {
            name: '郑州',
            count: '11'
        },
        kf: {
            name: '开封',
            count: '22'
        },
        ly: {
            name: '洛阳',
            count: '33'
        },
        ny: {
            name: '南阳',
            count: '44'
        },
        lh: {
            name: '漯河',
            count: '55'
        },
        xc: {
            name: '许昌',
            count: '11'
        },
        smx: {
            name: '三门峡',
            count: '22'
        },
        pds: {
            name: '平顶山',
            count: '33'
        },
        zk: {
            name: '周口',
            count: '44'
        },
        zmd: {
            name: '驻马店',
            count: '55'
        },
        xx: {
            name: '新乡',
            count: '6'
        },
        hb: {
            name: '鹤壁',
            count: '11'
        },
        jz: {
            name: '焦作',
            count: '22'
        },
        py: {
            name: '濮阳',
            count: '33'
        },
        ay: {
            name: '安阳',
            count: '44'
        },
        sq: {
            name: '商丘',
            count: '55'
        },
        xy: {
            name: '信阳',
            count: '66'
        },
        jy: {
            name: '济源',
            count: '11'
        }
    },
    tableList:{
        data1: [
            {
                name: 'John Brown',
                shiji: '000000',
                shenbao: '000000',
                shenbaopiancha: '000000',
                goudianliang: '000000',
                goudianpiancha: '000000',
                yucedianliang: '000000',
                yucepiancha: '000000',
                gonglv: '000000',
                zonglan: '000000',
                zhishu: '000000',
                caozuo: '000000',
            },{
                name: 'John Brown',
                shiji: '000000',
                shenbao: '000000',
                shenbaopiancha: '000000',
                goudianliang: '000000',
                goudianpiancha: '000000',
                yucedianliang: '000000',
                yucepiancha: '000000',
                gonglv: '000000',
                zonglan: '000000',
                zhishu: '000000',
                caozuo: '000000',
            },
        ],
        pageData:{
            total:100,
            current:2
        }
    }
}

const mutations = {

    setTablePage(state ,res){
        state.tableList.pageData.current = res
    },
    setTableList(state ,res){
        console.log(res)
    },
    setCityList(state ,res){
        console.log(res)
    },
    setCurrentCity(state ,res){
        state.currentCity = res
    }
}

const actions = {
    someAsyncTask({commit}) {
        // do something async

    },

    'setTableList':function({commit},res){
        commit('setTableList',res)
    },
    'setCityList':function({commit},res){
        commit('setCityList',res)
    },
    'setCurrentCity':function({commit},res){
        commit('setCurrentCity',res)
    }
}

export default {
    state,
    mutations,
    actions,
    getters: {
        cityList: state => {
            return state.cityList
        },
        tableList:state => {
            return state.tableList
        },
        currentCity:state =>{
            return state.currentCity
        }
    }
}
