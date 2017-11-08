const state = {
  timeData:[]
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    // state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    // state.main++
  },
  SET_TIME_DATA(state ,res){
    state.timeData = res
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },
  'SET_TIME_DATA':function({commit},res){
    commit('SET_TIME_DATA',res)
  }
}

export default {
  state,
  mutations,
  actions,
  getters:{
    timeData:state=>{
      return state.timeData
    }
  }
}
