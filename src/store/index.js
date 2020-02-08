import Vuex from 'vuex'
import themeClassStore from './theme/themeClassStore'
import themeStore from './theme/themeStore'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        themeClassStore:themeClassStore,
        themeStore:themeStore
    }
})

export default store