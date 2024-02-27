import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = new Vuex.Store({
  state: {
    search: null,
    pageLoad: "menu",
  },
  mutations: {
    setSearch(state, search) { state.search = search; },
    setpageLoad(state, pageLoad) { state.pageLoad = pageLoad; },
  },
  plugins: [createPersistedState(
    {
      paths: ['search'],
    }
  )],
});

export default store;
