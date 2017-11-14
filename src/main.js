

import Vue from 'vue'
import App from './app/App'
import router from './router'
import VueResource from 'vue-resource' 
import store from './vuex'


Vue.use(VueResource);

Vue.config.productionTip = false

  new Vue({
     el: '#app',
     router,
     store,
     template: '<App/>',
     components: { App }
  })


