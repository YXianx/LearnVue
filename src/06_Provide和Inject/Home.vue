<template>
    <div>
        <h2>Home.vue</h2>
        <h2>{{appCounter}}</h2>
        <button @click="appCounter++">Home Increment</button>
    </div>
</template>

<script>
import {inject} from 'vue'

export default {
    setup(){
        const appCounter = inject("counter")

        return{
            appCounter
        }
    }
}
</script>

<style>

</style>