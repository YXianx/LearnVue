<template>
    <div>
        <input type="text" ref="inpRef">
    </div>
</template>
<script>
// input焦点基础实现
import {ref,onMounted} from 'vue' 

export default {
    setup(){
        const inpRef = ref(null)
        onMounted(()=>{
            console.log(inpRef.value);
            // 在页面加载完毕后就获取焦点在input上
            inpRef.value.focus()
        })
        return{
            inpRef
        }
    }
}
</script>
<style lang="">
    
</style>