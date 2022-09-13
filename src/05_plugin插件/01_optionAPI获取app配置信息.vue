<template>
    <div>
        {{$globalName}}
    </div>
</template>
<script>
export default {
    mounted(){
        // optionAPI由于有this绑定所以可以直接通过this拿到app配置中的值
        console.log("app.config存储的name：",this.$globalName);
    }
}
</script>
<style lang="">
    
</style>