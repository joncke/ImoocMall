// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
  loading:"/static/loading-svg/loading-bars.svg"
})

// import {sum,minus} from './util.js'
// console.log(`sum:${sum(1,6)}`);
// console.log(`minus:${minus(10,2)}`);
// import * as util from './util.js';
// console.log(`sum:${util.sum(1,6)}`);
// console.log(`minus:${util.minus(10,2)}`);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
