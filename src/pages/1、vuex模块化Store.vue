<template>
  <h1>Vuex 模块化Store</h1>
  <div>{{$store.state.rootDesc}}</div>
  <div>{{$store.state.home.homeDesc}}</div>
  <div>{{$store.state.user.userDesc}}</div>
</template>

<script>
export default {
  name: 'VuexModules',
  components: {
    
  },
}
</script>

<style>

</style>
