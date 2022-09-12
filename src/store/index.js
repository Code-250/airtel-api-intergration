/* eslint-disable no-unused-vars */
import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.devtools = true;
const defaultState = () => {
  return { token: "", user: {}, data: [] };
};

export default new Vuex.Store({
  state: defaultState,
  getters: {
    isLoggedIn: (state) => {
      return state.token;
    },
    getuser: (state) => {
      return state.user;
    },
    getTransactions: (state) => {
      return state.data;
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET: (state) => {
      Object.assign(state, defaultState());
    },
    GET_TRANSACTIONS: (state, data) => {
      state.data = data;
    },
    CREATE_TRANSACTION: (state, data) => {
      console.log(data, state.data, "thse are data to save");
      state.data.push(data.data);
      console.log(state.data);
    },
  },
  actions: {
    login: ({ commit, dispatch }, { token, user }) => {
      commit("SET_TOKEN", token);
      commit("SET_USER", user);

      axios.defaults.headers.common["Authorization"] = `bearer${token}`;
    },
    getTransactions: ({ commit, dispatch }, { data }) => {
      commit("GET_TRANSACTIONS", data);
    },
    createTransaction: ({ commit }, { data }) => {
      commit("CREATE_TRANSACTION", data);
    },
    logout: ({ commit }) => {
      commit("RESET", "");
    },
  },
});
