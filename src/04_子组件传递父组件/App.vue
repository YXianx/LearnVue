<template>
  <div id="app">
    <h1>{{counter}}</h1>
    <counter-operation-vue @add="handleAdd" 
                           @sub="handleSub"
                           @addN="handleAddN">
    </counter-operation-vue>
  </div>
</template>

<script>
import CounterOperationVue from './CounterOperation.vue'
export default {
    data(){
        return{
            counter:0
        }
    },
    components:{
        CounterOperationVue
    },

    methods:{
        handleAdd(){
            this.counter += 1
        },
        handleSub(){
            this.counter -= 1
        },
        handleAddN(num,msg){
            this.counter += parseInt(num)
            console.log(msg);
        }
    }
}
</script>

<style>
    #app{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:50vh;
    }
</style>