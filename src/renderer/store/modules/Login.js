const state = {
    login:false
}

const mutations = {

    setLogin(state ,res){
        state.login = res
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
        }
    }
}
