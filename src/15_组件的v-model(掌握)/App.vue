<template>
    <div>
        <!-- 元素上使用v-model -->
        <h1>元素上使用v-model</h1>
        v-model: <input v-model="message">
        <br>
        
        
        <!-- 原生标签才有$event.target.value 组件则没有要获取值直接$event即可 -->
        v-model本质 -> :value @input: <input :value="message" @input="message = $event.target.value">
        <h2>{{message}}</h2>

        <!-- 组件上使用v-model -->
        <h1>组件上使用v-model</h1>
        <!-- 在组件上写v-model 相当于组件内部做了 :modelValue='message'绑定，组件v-model绑定的默认变量为 modelValue -->
        <!-- 由于v-model是双向绑定的所以组件还会做 @update:model-value="message = $event" 监听值改变事件 -->
        <!-- 组件上写v-model 相当于 -> <yx-input :modelValue="messafe" @update:modelValue="message = $event"></yx-input> -->

        <!-- 作用：用户在用我们这个组件的时候不需要知道内部props的变量名 只需要写v-model就能绑定到我们规定的变量上去 -->
        <yx-input v-model="message"></yx-input>

        <br>

        set title:<input v-model="title"/>
        <!-- 一个组件绑定多个v-model -->
        <!-- <yx-input-2 v-model="title" v-model="content"></yx-input-2> 该写法是错误的 多个model需要写名字区分 -->
        <yx-input-2 v-model="message" v-model:title="title"></yx-input-2>
    </div>
</template>

<script>
import YxInput from './YxInput.vue'
import YxInput2 from './YxInput2.vue'

export default {
    components:{
        YxInput,
        YxInput2
    },

    data(){
        return {
            message:"",
            title:""
        }
    }
}
</script>

<style>

</style>