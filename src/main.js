import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import store from '@/store/index';
import router from '@/router/index'
import '@/assets/theme/index.css'
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.directive('title',  function (el, binding) {
  document.title = el.dataset.title
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
