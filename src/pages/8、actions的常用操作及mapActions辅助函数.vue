<template>
    <h2>actions的常用操作</h2>
    <div>store-counter:{{$store.state.counter}}</div>
    <button @click="decClick">-</button>
    <button @click="addClick">action+</button>
    <button @click="decrementAction">mapActions -</button>
    <button @click="incrementAction({n:1})">mapActions +</button>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    mounted(){
        this.$store.dispatch("getBannersDataAction").then(res=>{
            console.log(res);
        })
    },

    methods:{
        addClick(){
            this.$store.dispatch("incrementAction",{n:15})
        },
        decClick(){
            this.$store.dispatch("decrementAction")
        },

        // mapActions映射
        ...mapActions(["incrementAction","decrementAction"])
    },
}
</script>

<style>

</style>