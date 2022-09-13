<template>
    <div v-xianx>
        lalal
    </div>
</template>
<script>
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