const state = {
    cus_id:1,
    cus_name:'',
    cus_termList:[],
    clientid:'999600CC',
    searchKey:'',
    cusList:{
        tableData:[]
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
    setTermList(state,res){
        state.cus_termList = res || [1]
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
    'setTermList':function({commit},res){
        commit('setTermList',res)
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
        cus_termList:state=>{
             return state.cus_termList
        },
        clientid:state=>{
            return state.clientid
        }

    }
}
