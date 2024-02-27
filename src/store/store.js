import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = new Vuex.Store({
  state: {
    search: null
  },
  mutations: {
    setSearch(state, search) { state.search = search; }
  },
  plugins: [createPersistedState()],
});

export default store;
