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

        // watchEffect 清除副作用
        const stop = watchEffect((onInvalidate)=>{
            console.log("name:",name.value,"age:",age.value);
            
            const time = setTimeout(()=>{
                console.log("2s后执行的操作");
            },2000)

            // onInvalidate回调函数会在watch监听的值改变后或者组件被销毁后执行
            // 在开发中我们需要监听函数中执行网络请求，但是网络请求还没到达的时候，我们停止了侦听器或者侦听器的侦听函数再次被执行
            // 那么上一次的网络请求家应该被取消掉，这时候我们可以清除上一次的副作用
            onInvalidate(()=>{
                clearTimeout(time)
                console.log("onInvalidate");
            })
        })

        const changeName = ()=>name.value = 'Kobe'
        const changeAge = ()=>{
            age.value++

            if(age.value>25){
                stop()
            }
        }


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