<template>
  <div>
    <h2>{{counter}}</h2>
    <h2>double:{{doubleCounter}}</h2>
    <button @click="add">-</button>
    <button @click="sub">+</button>
  </div>
</template>

<script>
// options api 会导致一个功能的内容分散中好几个地方，随着代码的庞大，options也会越来越长，可读性较差看代码跳来跳去的
export default {
    data(){
        return{
            counter:0
        }
    },
    methods:{
        add(){

        },
        sub(){

        }
    },
    computed:{
        doubleCounter(){
            return this.counter * 2
        }
    }
}
</script>

<style>

</style>