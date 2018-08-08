import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

import state from './state.js'
import offers from './modules/offers/'

const store = new Vuex.Store({
	state,
    modules: {
    	offers
	},
})

export default store