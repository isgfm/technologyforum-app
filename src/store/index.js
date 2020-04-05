import Vuex from 'vuex'
import themeClassStore from './theme/themeClassStore'
import themeStore from './theme/themeStore'
import userStore from './user/userStore'
import Vue from 'vue'
import themeReplyStore from './theme/themeReplyStore'
import keepStore from './keep/keepStore'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        themeClassStore:themeClassStore,
        themeStore:themeStore,
        userStore:userStore,
        themeReplyStore:themeReplyStore,
        keepStore:keepStore
    }
})

export default store