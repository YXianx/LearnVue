<template>
  <div>
    <async-category>
        <template #desc>
            <i>插槽#简写方式</i>
        </template>
    </async-category>
  </div>
</template>

<script>
// 异步组件的作用是对该组件进行分包操作，对该组件内容build进行单独的打包
// 这样的好处是让用不到该部分内容的时候浏览器不加载，按需加载，优化第一次打开页面的速度
import {defineAsyncComponent} from 'vue' // 从vue库导入声明异步组件函数（defineAsyncComponent功能基于webpack 可查看main.js中的import语句）
const AsyncCategory = defineAsyncComponent(()=>import('./AsyncCategory.vue')) // 异步导入组件

export default {
    components:{
        AsyncCategory
    }
}
</script>

<style>

</style>