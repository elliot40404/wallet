import { createStore } from "vuex";

export default createStore({
	state: {
    data: []
	},
	mutations: {
    transact(state, val) {
      state.data.push(val)
      window.localStorage.setItem('data', JSON.stringify(state.data))
    },
    setData(state, value) {
      state.data = value
    },
    remove(state, val) {
      state.data = state.data.filter(e => e.id === val)
      window.localStorage.setItem('data', JSON.stringify(state.data))
    }
  },
	actions: {
    transact({commit}, val) {
      commit('transact', val)
    },
    setData({commit}, val) {
      commit('setData', val)
    },
    remove({commit}, val) {
      commit('remove', val)
    },
  },
  getters: {
    total(state) {
      if (state.data.length === 0) return 0
      const inc = state.data.filter(e => e.category === 'income').length === 0 ? 0 :
      state.data.filter(e => e.category === 'income').map(e => e.amount).reduce((acc, curr) => acc + curr);
      const exp = state.data.filter(e => e.category === 'expense').length === 0 ? 0 :
      state.data.filter(e => e.category === 'expense').map(e => e.amount).reduce((acc, curr) => acc + curr);
      return inc - exp;
    },
    income(state) {
      if (state.data.length === 0) return 0
      return state.data.filter(e => e.category === 'income').length === 0 ? 0 :
      state.data.filter(e => e.category === 'income').map(e => e.amount).reduce((acc, curr) => acc + curr)
    },
    expense(state) {
      if (state.data.length === 0) return 0
      return state.data.filter(e => e.category === 'expense').length === 0 ? 0 :
      state.data.filter(e => e.category === 'expense').map(e => e.amount).reduce((acc, curr) => acc + curr);
    },
    inc: (state) => (opt) => {
      return state.data.filter(e => e.category === opt)
    },
  },
	modules: {},
});
