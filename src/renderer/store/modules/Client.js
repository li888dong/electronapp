const state = {
    cus_id:1,
    cus_name:'',
    term_id:1,
    clientid:'999600CC',
    currentCity:'all',
    searchKey:'',
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
    cusList:{
        tableData: [],
        pageData:{
            total:100,
            current:2
        }
    }
}

const mutations = {

    setTablePage(state ,res){
        state.cusList.pageData.current = res
    },
    setcusList(state ,res){
        state.cusList.tableData = res
    },
    setCityList(state ,res){
        console.log(res)
    },
    setCurrentCity(state ,res){
        state.currentCity = res
    },
    setSearchKey(state ,res){
        state.searchKey = res
    },
    setCusId(state ,res){
        state.cus_id = res||1;
        console.log('当前客户id',state.cus_id)
    },
    setCusName(state ,res){
        state.cus_name = res;
        console.log('当前客户名称',state.cus_name)
    },
    setTemID(state,res){
        state.term_id = res || 1
    },
    setClientId(state,res){
        state.clientid = res
    }
}

const actions = {
    someAsyncTask({commit}) {
        // do something async

    },

    'setcusList':function({commit},res){
        commit('setcusList',res)
    },
    'setCityList':function({commit},res){
        commit('setCityList',res)
    },
    'setCurrentCity':function({commit},res){
        commit('setCurrentCity',res)
    },
    'setSearchKey':function({commit},res){
        commit('setSearchKey',res)
    },
    'setCusId':function({commit},res){
        commit('setCusId',res)
    },
    'setCusName':function({commit},res){
        commit('setCusName',res)
    },
    'setTemID':function({commit},res){
        commit('setTemID',res)
    },
    'setClientId':function({commit},res){
        commit('setClientId',res)
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
        cusList:state => {
            return state.cusList
        },
        currentCity:state =>{
            return state.currentCity
        },
        searchKey:state =>{
            return state.searchKey
        },
        cus_id:state =>{
            return state.cus_id
        },
        cus_name:state =>{
            return state.cus_name
        },
        term_id:state=>{
             return state.term_id
        },
        clientid:state=>{
            return state.clientid
        }

    }
}
