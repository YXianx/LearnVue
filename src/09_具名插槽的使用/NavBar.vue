<template>
    <div class="nav-bar">
        <div class="left-content">
            <slot name="left">
                <i>左插槽默认内容</i>
            </slot>
        </div>

        <div class="center-content">
            <slot name="center">
                <i>中间插槽默认内容</i>
            </slot>
        </div>
        
        <div class="right-content">
            <slot name="right">
                <i>右插槽默认内容</i>
            </slot>
        </div>

        <!-- 插槽名称自定义，由父组件传入  封装高级组件会用到 -->
        <div class="addition">
            <!-- props使得父子两边的插槽名称一致 -->
            <slot :name="name">
                <i>扩展内容</i>
            </slot>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            name:{
                type:String,
                default(){
                    return ""
                }
            }
        }
    }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 44px;
        background: #f4f4f4;
    }

    .nav-bar *{
        text-align: center;
        line-height: 44px;
    }
    .nav-bar .left-content{
        width: 25%;
        background: brown;
    }
    .nav-bar .center-content{
        flex:1;
        background: dodgerblue;
    }
    .nav-bar .right-content{
        width: 25%;
        background:slateblue;
    }
</style>