<template>
    <h2>setup中使用mapMutations</h2>
    <div>store-counter:{{$store.state.counter}}</div>
    <button @click="decrement">mapMutations写法-1</button>
    <button @click="INCREMENT_N({n:10})">mapMutations写法+10</button>
</template>

<script>
import { mapMutations } from 'vuex'
import { INCREMENT_N } from '@/store/mutation-types'

export default {
    setup(){
        const storeMutations = mapMutations(["decrement",INCREMENT_N])
        return{
            ...storeMutations
        }
    }
}
</script>

<style>

</style>