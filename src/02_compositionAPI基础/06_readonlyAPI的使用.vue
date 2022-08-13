<template>
  <div>
    <button @click="btnClick">修改状态</button>
  </div>
</template>

<script>
import {ref,reactive,readonly} from 'vue'

// readonlyAPI原理是利用proxy对set属性进行封锁拦截，再return proxy对象回来，让其只能get读取不能set修改
// 当对readonly对象进行set修改操作时，浏览器会报warning的警告

// 当我们传递值给子组件时，不希望该值可以被子组件随意更改时，就可以选择传递readonly对象给子组件，readonly可作用于普通对象、也可作用于响应式对象
export default {
    setup(){
        // 1、普通对象readonly，,当父组件改变info的值，readonlyInfo不会随之改变并传递给子组件，普通对象没有响应式所以是个死值
        const info1 = {
            name:"xian"
        }
        const readonlyInfo1 = readonly(info1)

        // 2、reactive响应式对象readonly,当父组件改变info2的值，readonlyInfo2也会随之改变并传递给子组件
        const info2 = reactive({
            name:"xian"
        })
        const readonlyInfo2 = readonly(info2)

        // 3、ref响应式对象readonly,当父组件改变info3的值，readonlyInfo3也会随之改变并传递给子组件
        const info3 = ref("why")
        const readonlyInfo3 = readonly(info3)

        const btnClick = ()=>{
            console.log(readonlyInfo3.value);
            readonlyInfo3.value = "new name"
        }

        return{
            btnClick
        }
    }
}
</script>

<style>

</style>