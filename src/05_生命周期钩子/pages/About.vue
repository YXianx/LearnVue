<template>
  <div>
    <h2>About.vue</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">Increment</button>
  </div>
</template>

<script>
import {ref,onActivated,onDeactivated} from 'vue'
export default {
    name:"about",
    setup(){
        onActivated(()=>{
            console.log("About onActivated");
        })
        onDeactivated(()=>{
            console.log("About onDeactivated");
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