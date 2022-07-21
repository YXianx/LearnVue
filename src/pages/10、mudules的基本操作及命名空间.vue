<template>
  <h1>Vuex 模块化Store</h1>
  <div>{{$store.state.rootDesc}}</div>
  <div>{{$store.state.home.homeDesc}}</div>
  <div>{{$store.state.user.userDesc}}</div>

  <h2>模块化Getters</h2>
  <div>namespace独立化模块后，常用获取getters操作：{{$store.getters.getDoubleCounter}}</div>
  <div>namespace独立化模块后，模块化获取getters操作：{{$store.getters["home/getDoubleCounter"]}}</div>

  <h2>模块化mutations</h2>
  <div>index counter: {{counter}}</div>
  <div>home counter: {{$store.state.home.counter}}</div>
  <button @click="decrement">index -</button>
  <button @click="increment">index +</button>
  <button @click="subHomeClick">home -</button>
  <button @click="addHomeClick">home +</button>
  <button @click="rootAddClick">home子模块的actions派发commit给根模块的counter +</button>

</template>

<script>
import { useState } from '@/hooks/useState'
import { mapMutations } from 'vuex'

export default {
  methods:{
    // 模块化后不能使用map进行映射函数
    addHomeClick(){
      this.$store.commit("home/increment")
    },
    subHomeClick(){ 
      this.$store.commit("home/decrement")
    },
    rootAddClick(){
      this.$store.dispatch("home/incrementAction")
    }
  },
  setup(){
    const storeStates = useState(["counter"])
    const storeMutations = mapMutations(["increment","decrement"])

    return{
      ...storeStates,
      ...storeMutations
    }
  }
}
</script>

<style>

</style>
