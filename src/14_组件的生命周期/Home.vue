<template>
    <div>
        <h2>Home.vue</h2>
        <h3 ref="title">title: {{title}}</h3>
        <button @click="title='你好呀 王花花'">change title</button>
    </div>
</template>

<script>
export default {
    data(){return{title:"你好呀 李银河"}},

    // 组件的生命周期钩子函数  vue注册挂载组件时会在某一时刻调用对应的钩子函数

    // 创建组件实例前
    beforeCreate(){
        console.log("home beforCreated");
    },
    // 创建组件实例后
    created(){
        console.log("home created");
    },

    // 组件挂载前
    beforeMount(){
        console.log("home beforMouted");
    },
    // 组件挂载完毕后
    mounted(){
        console.log("home mounted");
    },
    
    // (更新点) 组件销毁钩子函数从 destroyed() 换成了 unmounted()
    beforeUnmount(){
        console.log("home beforUnmouted");
    },
    // 组件取消挂载销毁后
    unmounted(){
        console.log("home umounted");
    },


    beforeUpdate(){
        console.log("home beforeUpdate 数据发生改变",);
    },
    updated(){
        console.log("home updated 数据改变完毕");
    }
}
</script>

<style>

</style>