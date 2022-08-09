<template>
    <div>
        <!-- 通过子组件props实现自定义动态插槽名称 -->
        <nav-bar :name="name">
            <template v-slot:left>
                <button>left</button>
            </template>
            <template v-slot:center>
                <input type="text">
            </template>
            <template v-slot:right>
                <button>right</button>
            </template>
            
            <!-- 动态插槽名称绑定方式 需要加[]才能引用到data -->
            <template v-slot:[name]>
                <button>自定义插槽名称</button>
            </template>

            <!-- 未指定名称则无法插入内容 -->
            <h1>222</h1>
        </nav-bar>

        <br>

        <nav-bar></nav-bar>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue'

    export default{
        components:{
            NavBar
        },

        data(){
            return{
                name:"addition"
            }
        }
    }
</script>

<style>

</style>