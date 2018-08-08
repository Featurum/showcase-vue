import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const notFound = require('../pages/notfound/notfound.vue')
const index = require('../pages/index/index.vue')

const router = new VueRouter({
	mode: 'history',
	
	routes: [
		{ path: "*", redirect: { name: '404' } },
		{ name: '404', path: "/404", component: notFound },
		{ name: 'index', path: '/', component: index }
	],

	scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router