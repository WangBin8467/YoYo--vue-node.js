// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/scss/font-awesome.scss'

import store from './store/index.js';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
});



