<template>
    <div>
        
    </div>
</template>
<script>
// compositionAPI要想获取config属性就得通过getCurrentInstance函数
import {getCurrentInstance} from 'vue'
export default {
    setup(){
        const instance = getCurrentInstance()
        console.log("compositionAPI获取app配置：",instance.appContext.config.globalProperties.$globalName);
    }
}
</script>
<style lang="">
    
</style>