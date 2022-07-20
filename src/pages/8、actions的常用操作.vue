<template>
    <h2>actions的常用操作</h2>
    <div>store-counter:{{$store.state.counter}}</div>
    <button @click="decClick">-</button>
    <button @click="addClick">action+</button>
</template>

<script>
export default {
    methods:{
        addClick(){
            this.$store.dispatch("incrementAction",{n:15})
        },
        decClick(){
            this.$store.dispatch("decrementAction")
            .then(res=>{
                console.log(res);
            })
        }
    }
}
</script>

<style>

</style>