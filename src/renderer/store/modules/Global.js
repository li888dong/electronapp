const state = {
    fastboot:false,
    access_token:'',
    mainsidebar:false
}

const mutations = {
    DECREMENT_MAIN_COUNTER(state) {
        // state.main--
    },
    INCREMENT_MAIN_COUNTER(state) {
        // state.main++
    },
    setFastboot(state, res) {
       state.fastboot = !state.fastboot
    },
    setToken(state, res) {
       state.access_token = res
    },
    setMainSidebar(state,res){
        state.mainsidebar = res;
    }
}

const actions = {
    someAsyncTask({commit}) {
        // do something async
        commit('INCREMENT_MAIN_COUNTER')
    },
    'setFastboot': function ({commit}, res) {
        commit('setFastboot', res)
    },
    'setToken': function ({commit}, res) {
        commit('setToken', res)
    },
    'setMainSidebar':function({commit},res){
        commit('setMainSidebar',res)
    }
}

export default {
    state,
    mutations,
    actions,
    getters: {
        fastboot: state => {
            return state.fastboot
        },
        access_token: state => {
            return state.access_token
        },
        mainsidebar:state=>{
            return state.mainsidebar
        }
    }
}
