<template>
    <div>
        <!-- 双向绑定:value @input 方式1 -->
        方式1: <input :value="modelValue" @input="inputChange">
        <!-- 计算属性 方法2 -->
        方式2: <input v-model="value">
        <h2>yxinput的message：{{modelValue}}</h2>
    </div>
</template>

<script>
export default {
    // 通过事件发出emit
    emits:["update:modelValue"],

    props:{
        // 组件v-model绑定的默认变量为 modelValue
        modelValue:{
            type:String,
            dafault(){
                return ""
            }
        }
    },

    computed:{
        value:{
            set(value){
                this.$emit('update:modelValue',value)
            },
            get(){
                return this.modelValue
            }
        }
    },

    methods:{
        inputChange(event){
            this.$emit("update:modelValue",event.target.value)
        }
    }
}
</script>

<style>

</style>