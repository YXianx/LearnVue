<template>
  <!-- <vue-map-state></vue-map-state> -->
  <!-- <vue-use-state></vue-use-state> -->
  <home></home>
</template>

<script>
// import VueModule from './pages/1、vuex模块化Store.vue'
// import VueMapState from './pages/2、mapState辅助函数.vue'
// import VueUseState from './pages/3、setup中如何使用mapSatate及封装useState.vue'
import Home from './pages/8、actions的常用操作.vue'

export default {
  name: 'App',
  components: {
    // VueModule,
    // VueMapState
    // VueUseState
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
