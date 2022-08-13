<template>
  <div>
    <h2>{{name}} - {{age}}</h2>
    <button @click="changeName">改变名称</button>
    <button @click="changeAge">改变年龄</button>
  </div>
</template>

<script>
import {ref, watchEffect} from 'vue'
export default {
    setup(){

        const name = ref("why")
        const age = ref(22)

        const changeName = ()=>name.value = 'Kobe'
        const changeAge = ()=>age.value++

        // watchEffect 自动收集可响应式对象的依赖，当对象发生改变时函数watchEffect重新执行
        // watchEffect无需声明要监听哪个对象，默认第一次会直接执行watchEffect，类似于扫描一遍函数内所引用的对象，去对其监听改变
        watchEffect(()=>{
            console.log("name:",name.value,"age:",age.value);
        })

        return{
            name,
            age,
            changeName,
            changeAge
        }
    }
}
</script>

<style>

</style>