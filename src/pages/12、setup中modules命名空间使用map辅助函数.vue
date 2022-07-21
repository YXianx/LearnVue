<template>
  <h1>setup中modules命名空间使用map辅助函数</h1>
  <div>mapState展示home模块的Desc：{{homeDesc}}</div>

  <h2>模块化Getters</h2>
  <div>mapGetters展示home模块的双倍counter：{{getDoubleCounter}}</div>

  <h2>模块化mutations</h2>
  <div>home counter: {{counter}}</div>
  <button @click="decrement">index -</button>
  <button @click="increment">index +</button>
</template>

<script>
// 重新封装了useState useGetters钩子函数,使得可以应对模块化操作
import {useState} from '../hooks/useState.js'
import {useGetters} from '../hooks/useGetters.js'
export default {
    setup(){
        const homeStoreStates = useState("home",["homeDesc","counter"])
        const homeStoreGetters = useGetters("home",["getDoubleCounter"])

        return{
            ...homeStoreStates,
            ...homeStoreGetters
        }
    }
}
</script>

<style>

</style>