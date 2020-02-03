import Vuex from 'vuex'
import themeClassStore from './theme/themeClassStore'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        themeClassStore:themeClassStore
    }
})

export default store