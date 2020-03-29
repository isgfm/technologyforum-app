import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import store from '@/store/index';
import router from '@/router/index'
import '@/assets/theme/index.css'
import Vuetify from 'vuetify/lib'
Vue.use(Vuetify);
Vue.use(ElementUI);
Vue.config.productionTip = false;
const vuetify = new Vuetify({});
Vue.directive('title',  function (el, binding) {
  document.title = el.dataset.title
})

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
