<template>
  <div>
    <h1>App.vue</h1>
    <h2>{{counter}}</h2>
    <button @click="counter++">Increment</button>

    <br/>
    <br/>

    <button @click="isShow=!isShow">切换页面</button>
    <keep-alive include="" exclude="home">
        <component :is="isShow?'home':'about'"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import {
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted,
    onBeforeUpdate,
    onUpdated,

    ref
} from 'vue'
export default {
    components:{
        Home,
        About
    },
    setup(){
        // compositionAPI中没有beforeCreate and created！！！，那么我们需要在页面挂载之前做一些操作的话要写在哪呢？
        // 我们可以将原来created的操作直接写在setup中，setup的执行是要早于beforeCreate和created生命周期钩子之前的，所以直接把代码写setup中即可！

        // 相同的生命周期可以使用多次(api可调用多次)都会被执行，方便于代码分模块的抽离
        onBeforeMount(()=>{
            console.log("app beforeMount");
        })
        onMounted(()=>{
            console.log("app mounted");
        })

        onBeforeUpdate(()=>{
            console.log("app beforeUpdate");
        })
        onUpdated(()=>{
            console.log("app updated");
        })

        onBeforeUnmount(()=>{
            console.log("app beforeUnmount");
        })
        onUnmounted(()=>{
            console.log("app unmounted");
        })

        const counter = ref(0)
        const isShow = ref(true)

        return{
            counter,
            isShow
        }
    }
}
</script>

<style>

</style>