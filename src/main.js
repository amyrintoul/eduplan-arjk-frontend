import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import store from './store'

import vuetify from '@/plugins/vuetify'
import Schedule from 'vue-schedule'

Vue.use(Schedule)

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
