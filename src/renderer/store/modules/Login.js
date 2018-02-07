const state = {
    login:false,
    com_id:'',
    fullname:'',
    uid:'',
}

const mutations = {

    setLogin(state ,res){
        state.login = res[0];
        state.com_id=res[1];
        state.fullname=res[2]||'未设置';
        state.uid = res[3]; 
    }
}

const actions = {
    someAsyncTask({commit}) {
        // do something async

    },
    'setLogin':function({commit},res){
        commit('setLogin',res)
    }
}

export default {
    state,
    mutations,
    actions,
    getters: {
        login: state => {
            return state.login
        },
        com_id: state=> {
            return state.com_id
        },
        fullname:state=>{
            return state.fullname
        },
        uid:state=>{
            return state.uid
        }
    }
}
