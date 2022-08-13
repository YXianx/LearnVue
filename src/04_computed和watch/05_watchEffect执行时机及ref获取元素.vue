<template>
  <div>
    <!-- ref元素赋值给title变量 注意这边的ref不能够动态绑定写成:ref！ -->
    <h2 ref="title">hello</h2>
  </div>
</template>

<script>
import {ref,watchEffect} from 'vue'

// setup中获取ref元素或组件，setup没有this，参数里也没有$refs所以vue2的方式在setup中不起作用
export default {
    setup(){
        // 初始化ref为null，之后来存储template中的元素
        // 当页面dom元素挂载完毕后title才会拿到元素对象是一个ref类型，ref.value拿到元素
        const title = ref(null)

        // watchEffect的执行时机
        // watchEffect默认会直接执行一次，如果我们之后还有很多逻辑代码，但是由于第一次的值为null那么之后的逻辑操作都会出问题
        // 通过watchEffect回调函数的第二个参数，我们可以传入一个对象，该对象用来设置watchEffect的配置项
        // 通过设置flush属性我们可以设置副作用函数的执行时机，”pre“会在元素挂载或更新之前执行，“post”会在元素更新后执行
        watchEffect(()=>{
            console.log(title.value);
        },{
            flush:"post"
        })

        return{
            title
        }
    }
}
</script>

<style>

</style>