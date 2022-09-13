<template>
    <div>
        <!-- 传值给指令默认是动态绑定的 如果要传递字符串则加单引号 -->
        <input type="text" v-why.attrNum="'coderwhy'" v-mydirective/>
    </div>
</template>
<script>
// input焦点指令实现
// 指令分为局部指令和全局指令，指令写在标签上可直接作用于标签，也方便复用功能
import {ref,onMounted} from 'vue' 

export default {
    // directives是一个option选项
    // 指定指令名称 无需写v-开头

    // 指令的生命周期 
    // created：在绑定元素的attribute或事件监听器被应用之前调用  (attribute就是标签属性比如input的value或者img的src以及我们的自定义指令)(事件监听器就是@input等等一系列事件)
    // beforeMount：当指令第一次绑定到元素并且挂载父组件之前调用
    // mounted：中绑定元素的父组件被挂载后调用
    // beforeUpdate：在更新包含组件的VNode之前调用
    // updated：在包含组件的VNode及子组件的VNode更新后调用
    // beforeUnmount & unmounted ：卸载前及卸载后调用
    directives:{
        why:{
            // 每个生命周期钩子函数都有四个参数
            created(el,bindings,vnode,preVnode) {
                console.log("created");
                // 获取指令的衔接内容
                // 指令通过.衔接内容，我们就可以通过bindings.modifiers获取到，获取到的是个对象{attrNum:true}，只要有衔接内容那么该内容为key，值就为false，这个值是默认的，不是我们指定传入的值
                console.log("modifiers: ",bindings.modifiers);
                // 获取指令的赋值内容
                console.log("value: ",bindings.value);
            },

            beforeMount() {
                console.log("beforeMount");
            },
            mounted() {
                console.log("mounted");
            },

            beforeUnmount() {
                console.log("beforeUnmout");
            },
            unmounted() {
                console.log("unmounted");
            },

            beforeUpdate() {
                console.log("beforeUpdate");
            },
            updated() {
                console.log("updated");
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