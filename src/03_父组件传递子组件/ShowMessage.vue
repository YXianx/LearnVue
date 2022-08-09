<template>
  <div>
    <!-- v-bind="$attrs" 绑定$attrs后父组件传递的非props的值(如class、id)都会作用在当前绑定$attrs的标签上 -->
    <div v-bind="$attrs">title: {{title}}</div>
    <div>content: {{content}}</div>
    <div>必传属性author: {{author}}</div>
    <div>必传属性且值固定几个：{{status}}</div>
  </div>
</template>

<script>
export default {
    // 禁止继承attrs(class、id) 默认继承在当前组件根节点上 
    inheritAttrs:false,

    props:{
        // props多种声明方式
        title:String,

        content:{
            type:String,
            // required表示参数必须传，不传浏览器会报warning的警告，required和default二者选一即可
            required:true
        },

        author:{
            type:String,
            default(){
                return "default"
            }
        },

        status:{
            // 必传
            required:true,
            // 校验参数 必须传递'success','warning','danger' 否则浏览器warning
            validator(value){
                return ['success','warning','danger'].includes(value)
            }
        }
    }
}
</script>

<style>

</style>