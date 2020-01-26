import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // 以下は router: router と同じ意味
  router,
  render: h => h(App)
}).$mount('#app')