<template>
  <div class="content">
    <h2>当前计数：{{counter}}</h2>
    <h2>计数*2：{{doubleCounter}}</h2>
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
    <br>
    <input v-model="inputVal" type="text" placeholder="input title">
    <button @click="changeClick">改变标题</button>

    <div class="scroll-content">
        <h3>scrollX:{{scrollX}}</h3>
        <h3>scrollY:{{scrollY}}</h3>
    </div>

    <div class="mouse-content">
        <h3>mouseX:{{mouseX}}</h3>
        <h3>mouseY:{{mouseY}}</h3>
    </div>

    <h3>localStorage：{{data}}</h3>
    <button @click="changeStorage">修改Storage</button>
  </div>
</template>

<script>
import { ref } from 'vue'
// 通过hook对代码抽取成单独的文件 hook声明一般以use开头  index模块统一出口优化代码
import {
    useCounter,
    useTitle,
    useScrollPosition,
    useMousePosition,
    useLocalStorage
} from './hook/index'

export default {
    // compositionAPI实现计数器等功能案例，代码简洁且一目了然，一个功能一个hook，想看实现就跳到具体的hook文件，独立且易读
    // optionAPI中要抽离代码复用的话就需要写在mixin，但是这样可能会造成变量名重复，如果不写在mixin写成单独的js，那么导出的内容需要这里放一个那里放一个(data、methods、computed等)
    setup(){
        const inputVal = ref(null)
        
        // 计数器hook
        const {counter,doubleCounter,increment,decrement} = useCounter()

        // 浏览器标题hook
        const title = useTitle("MyTitle")
        const changeClick = ()=>{
            title.value = inputVal.value
        }

        // 获取页面滚动坐标
        const {scrollX,scrollY} = useScrollPosition()

        // 获取鼠标坐标
        const {mouseX,mouseY} = useMousePosition()

        // localStorage
        const data = useLocalStorage("info",{name:'wang huahua',age:17})

        const changeStorage = ()=>{
            data.value = [1,2,3,4]
        }

        return{
            counter,
            doubleCounter,
            increment,
            decrement,

            inputVal,
            changeClick,

            scrollX,
            scrollY,

            mouseX,
            mouseY,

            data,
            changeStorage
        }
    }
}
</script>

<style>
.content{
    width: 3140px;
    height: 2500px;
}
.scroll-content{
    position: fixed;
    right: 20px;
    bottom: 10px;
}
.mouse-content{
    position: fixed;
    right: 20px;
    top: 10px;
}
</style>