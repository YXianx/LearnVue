<template>
    <div>
        <!-- 默认我们组件会变成组件树，最总都会收束成App.vue挂载到#app上，那么我们要是想让一些元素或组件显示在#app之外呢，那就要用到vue3新组件teleport -->
        <!-- 使用teleport teleport组件下的内容脱离#app容器之外显示到指定的选择器中 -->
        <teleport to='#why'>
            <h2>脱离#app的h2标签</h2>
        </teleport>        

        <!-- 多个teleport组件插入同个选择器的话 vue会进行一个合并 -->
        <teleport to="#why">
            <h2>脱离#app的子组件：</h2><HelloWorld></HelloWorld>
        </teleport>
    </div>
</template>
<script>
import HelloWorld from './HelloWorld.vue';
export default {
    setup() {

    },
    components: { HelloWorld }
}
</script>
<style lang="">
    
</style>