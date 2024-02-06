import { createStore, StoreOptions } from 'vuex';

const store = createStore({
    modules: {
        // ExempleModule: {
        //     namespaced: true,
        //     ...ExempleModule,
        //     persist: true,
        // },
    }
})

export default store;