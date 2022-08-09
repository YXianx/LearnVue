<template>
    <div>
        <div class="item" v-for="(item,index) in names">
            <!-- 将子组件作用域的数据往外传递出去给父组件 -->
            <slot :item="item" :index="index"></slot>
            <slot name="slotShowId" :index="index"></slot>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                names:["kobe","john",'jake','rose']
            }
        }
    }
</script>

<style>

</style>