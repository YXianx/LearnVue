<template>
    <div>
        <my-slot>
            自定义内容
        </my-slot>

        <br/>

        <my-slot>
            <!-- 如果有多个匿名插槽(非具名)则每个插槽都会被重复插入 -->
            <h4>插入多组内容</h4>
            <h4>插入多组内容</h4>
            <h4>插入多组内容</h4>
        </my-slot>

        <br/>

        <my-slot>
            <my-button></my-button>
        </my-slot>

        <br>

        <my-slot></my-slot>
    </div>
</template>

<script>
    import MySlot from './MySlot.vue'
    import MyButton from './MyButton.vue'

    export default{
        components:{
            MySlot,
            MyButton
        }
    }
</script>

<style lang="scss">

</style>