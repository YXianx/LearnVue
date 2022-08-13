<template>
    <h1>App.vue</h1>
    <h2>counter: {{counter}}</h2>
    <h2>事件监听：{{msg}}</h2>
    <br>
    <home message="my title" @homeClick="handleHomeClick"/>
</template>

<!-- setup顶层编写方式  顶层的意思就是直接写在script标签下 不需要在写 export default{setup(){return{}}} 相当于现在script标签就是一整个setup -->
<!-- setup顶层编写方式 导入组件直接import即可，不再需要在components中注册组件 -->
<!-- setup顶层编写方式 不需要写return 内容直接可以在template中使用 -->
<script setup>
    import {ref} from 'vue'
    import Home from './Home.vue'

    const counter = ref(1)
    const msg = ref("")
    const handleHomeClick = ()=>{
        msg.value = "监听到Home.vue发送的homeClick"
    }
</script>

<style scoped>

</style>