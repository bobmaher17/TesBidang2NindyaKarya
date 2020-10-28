import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiURL: 'http://localhost:8081/api',
        serverPath: 'http://localhost:8081'
    },
    mutations: {},
    actions: {},

});