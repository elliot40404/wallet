import { createStore } from "vuex";

export default createStore({
	state: {
		total: 12500,
		income: 13000,
		expense: 500,
	},
	mutations: {},
	actions: {},
  getters: {
    total(state) {
      return state.total;
    },
    income(state) {
      return state.income;
    },
    expense(state) {
      return state.expense;
    },
  },
	modules: {},
});
