<template>
    <div>
        <h1>App.vue</h1>
        <button @click="isShow = !isShow">挂载 or 销毁Home</button>
        <template v-if="isShow">
            <home/>
        </template>
    </div>
</template>

<script>
import Home from './Home.vue'

export default {
    data(){
        return{
            isShow:true
        }
    },

    components:{
        Home
    }
}
</script>

<style>

</style>