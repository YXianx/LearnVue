<template>
    <div>
        <child-cpn>
            <!-- 无名插槽使用子组件作用域 -> 在父组件中使用子组件作用域内的数据 -->
            <!-- slotProps(子组件作用域变量对象)名称可以自定义 但是用slotProps比较规范 -->
            <template v-slot="slotProps">
                <button>
                    {{slotProps.index}} - {{slotProps.item}}
                </button>
            </template>

            <!-- 具名插槽使用子组件作用域 -->
            <template v-slot:slotShowId="slotProps">
                <i>
                    {{slotProps.index}}
                </i>
            </template>

            <!-- 
                无名插槽默认的插槽名就是default
                <template v-slot:default>

                </template>
             -->
        </child-cpn>
    </div>
</template>

<script>
    import ChildCpn from './ChildCpn.vue'

    export default{
        components:{
            ChildCpn
        }
    }
</script>

<style>

</style>