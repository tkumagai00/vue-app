<script src="../../../../../vue-app/chap09/vuex-module-map/src/main-store.js"></script>
<template>
  <div id="app">
    メイン：{{mainUpdated}} <br />
    サブ：{{subUpdated}} <br />
    <input type="button" value="更新" v-on:click="setUpdated" />
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    mainUpdated() {
      return this.$store.state.main.updated
    },
    subUpdated() {
      return this.$store.state.sub.updated
    }
  },
  methods: {
    setUpdated() {
      this.$store.commit('main/setUpdated')
      this.$store.commit('sub/setUpdated')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
