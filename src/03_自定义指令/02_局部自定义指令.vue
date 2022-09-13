<template>
    <div>
        <input type="text" v-focus v-mydirective/>
    </div>
</template>
<script>
// input焦点指令实现
// 指令分为局部指令和全局指令，指令写在标签上可直接作用于标签，也方便复用功能

export default {
    // directives是一个option选项
    directives:{
        // 指定指令名称 无需写v-开头
        focus:{
            // 在组件的mounted生命周期中处理对应的逻辑
            // mounted会传递el组件对象，所以不需要写ref获取
            // mounted此处是指令钩子函数 不是组件生命周期的函数 相当于指令对象中的参数而已
            mounted(el,bindings,vnode,preVnode) {
                console.log(el);
                el.focus()
            },
        }
    },
    setup(){
        return{

        }
    }
}
</script>
<style lang="">
    
</style>