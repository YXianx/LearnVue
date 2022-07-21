<template>
    <h2>setup中使用mapActions</h2>
    <div>store-counter:{{$store.state.counter}}</div>
    <button @click="decrementAction">mapActions -</button>
    <button @click="incrementAction({n:1})">mapActions +</button>
</template>

<script>
import { mapActions,useStore } from 'vuex'
import { onMounted } from 'vue'
export default {
    setup(){
        const store = useStore()

        onMounted(()=>{
            store.dispatch("getBannersDataAction").then(res=>{
                console.log(res);
            })
        })

        const storeActions = mapActions(["incrementAction","decrementAction"])

        return{
            ...storeActions
        }
    }
}
</script>

<style>

</style>