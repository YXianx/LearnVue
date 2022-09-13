<!-- render渲染函数 开发了解即可 封装高级组件才用得上 平常开发业务场景用不到 -->
<!-- 开发的模版内容 要么用template实现 要么用render函数实现 -->

<!-- 模版编译的过程：template模版 -> vNode虚拟节点 -> vDom真实dom -->

<!-- 写render函数就不需要写template模版代码 -->
<!-- render函数在vue2中render会传递h()函数作为参数，而vue3模块分离，h()为单独的函数，所以render()也没有参数 -->
<!-- render()函数需要返回一个vNode节点对象 而h()函数可以创建vNode节点！ -->
<!-- render中有绑定this指向 -->
<script>
    import { h } from 'vue'
    export default{
        render(){
            // h()的三个参数 元素类型(标签、组件)， 属性(标签attribute或props，事件监听)， 内容(插槽或者文本内容) 
            return h("h2",{class:"title"},"Hello Render")
        }
    }
</script>

<style scoped>

</style>