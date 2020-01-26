import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 上は以下のコードの省略(匿名関数をアロー関数でシンプルに)
  // render: function(h) {
  //   return h(App);
  // }
}).$mount('#app')



