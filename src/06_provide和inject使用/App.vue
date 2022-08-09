<template>
    <div>
        <home></home>
        <button @click="addInfo">push info</button>
    </div>
</template>

<script>
import Home from './Home.vue'
import {computed} from 'vue'

export default{
    // provide - injecr 事件总线 子孙组件共享 用于传递简单数据，复杂数据共享还是需要vuex

    // provide对象写法  this为undefined
    // provide:{
    //     name:"张三",
    //     age:"21",
    //     // length:this.info.length 对象类型的this会指向到script标签作用域，则this为undefined
    // },

    // provide函数写法  vue会对函数进行解析，绑定函数当前的this指向
    provide(){
        return{
            name:"张三",
            age:21,
            // computed()绑定数据，当数据变化时重新传递给子组件length改变的值，如不用computed则只传递一次值且不是响应式更新
            length:computed(()=>this.info.length)
        }
    },  

    data(){
        return {
            info:["abc","cba","nba"]
        }
    },

    methods:{
        addInfo(){
            this.info.push("lala")
            console.log(this.info);
        }
    },

    components:{
        Home
    }
}

</script>

<style lang="scss" scoped>

</style>