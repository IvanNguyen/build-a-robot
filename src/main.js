import Vue from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';
// declare global custom directive.
import pinDirective from './shared/pin-directive'
// declare global custom filter.
import currencyFilter from './shared/currency-filter'
Vue.config.productionTip = false;
// using custom directive
Vue.directive('pin', pinDirective);
// using custom filter
Vue.filter('currency', currencyFilter);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
