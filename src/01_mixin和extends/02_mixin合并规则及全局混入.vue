<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="demoClick">mixin</button>
  </div>
</template>

<script>
import {demoMixin} from './mixins/demoMixin'

export default {
    // 全局混入或者全局组件都是中main.js的vue实例化中去做
    mixins:[demoMixin],

    // 除生命周期钩子函数之外其他的组件内的内容和mixin中的内容重名的话，vue都会默认使用组件内的内容，覆盖掉mixin的同名内容

    // 1、如果data函数的返回值对象和mixin中的data返回值对象一样(变量名相同)，则默认保留组件自身的数据
    data(){
        return{
            message:"hello"
        }
    },

    methods:{
        demoClick(){
            console.log("app.vue demoClick");
        }
    },

    // 2、生命周期钩子则会被合并到一起都会被调用
    created(){
        console.log("app.vue created");
    }

    // 3、对象类型的选项都会被合并为同个对象 methods/components..
}
</script>

<style>

</style>