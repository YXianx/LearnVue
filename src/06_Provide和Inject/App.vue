<template>
  <div>
    <h2>App.vue</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">App Increment</button>
    <br>
    <home/>
  </div>
</template>

<script>
import { provide,inject,readonly,ref } from 'vue'
import Home from './Home.vue'

export default {
    components:{
        Home
    },

    setup(){
        const counter = ref(1)
        // provide(key,value) 不能一次传多个数据，传一个写一个 传入普通对象则是死值，ref对象则为响应式数值
        // 开发规范！！！要按照单一数据流的形式，数据的源头才可以修改数据，所以这边用readonly将数据变成只读传给子组件
        // 开发时向子组件传值尽量使用readonly，如果子组件想修改数据也只能是发送事件让父组件修改
        provide("counter",readonly(counter))

        return{
            counter
        }
    }
}
</script>

<style>

</style>