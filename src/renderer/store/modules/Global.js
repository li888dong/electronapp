const state = {
    fastboot:false
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
    }
}

const actions = {
    someAsyncTask({commit}) {
        // do something async
        commit('INCREMENT_MAIN_COUNTER')
    },
    'setFastboot': function ({commit}, res) {
        commit('setFastboot', res)
    }
}

export default {
    state,
    mutations,
    actions,
    getters: {
        fastboot: state => {
            return state.fastboot
        }
    }
}
