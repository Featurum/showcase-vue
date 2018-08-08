import Vue from 'vue'
import Router from '../router'
import Store from '../store'

import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import Meta from 'vue-meta'
Vue.use(Meta)

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

Vue.http.get('/config.json').then(response => {
    window.vue = new Vue({
    	el: '#main',
    	router: Router,
        store: Store,

    	data: {
    		tooltip: '',
    		message: ''
    	},

        beforeCreate() {
            this.$store.state.config = response.data
        }
    });
})

