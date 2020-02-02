import Vue from 'vue'
import Vuex from 'vuex'
import MainModule from './main-store'
import SunModule from './sub-store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    main: MainModule,
    sub: SunModule
  }
})
