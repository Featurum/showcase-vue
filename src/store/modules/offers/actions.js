import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

const ERROR = "Ошибка загрузки"


function checkError(input) {
    return (input.result == "Ok") ? true : false;
}

const actions = {
	getData ({ state, commit, rootState }, input) {
        let query = {
            "data": ""
        }

    	Vue.http.post(rootState.config.api, query).then(response => {
            if(checkError(response.body)) {
                commit('saveData', {
                    response: response.body.items
                })
            } else {
                console.log(ERROR)
            }
        }, response => {
            console.log(ERROR)
        })
 	}
}

export default actions
