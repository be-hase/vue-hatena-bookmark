import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import App from './App';
import store from './store';
import router from './router';
import * as filters from './filters';

Vue.config.productionTip = false;

// Use Vuetify (https://vuetifyjs.com).
Vue.use(Vuetify);

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
