<template>
  <div>
    <h2>Home.vue</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">Increment</button>
  </div>
</template>

<script>
import {onBeforeUnmount,onUnmounted,ref} from 'vue'
export default {
    name:"home",
    setup(){
        onBeforeUnmount(()=>{
            console.log("Home BeforeUnmount");
        })
        onUnmounted(()=>{
            console.log("Home Unmounted");
        })

        const counter = ref(0)
        return{
            counter
        }
    }
}
</script>

<style>

</style>