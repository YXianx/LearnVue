<template>
  <div>
  </div>
</template>

<script>
// vue3的compositionApi结构和语法更加接近原生的javascript代码，所以转成typescript会更简单，vue2就不行，有点生硬
export default {
    props:{
        message:{
            type:String,
            default(){
                return "hello"
            }
        }
    },
    // setup参数不用可以不传
    // setup中没有this绑定！ 
    // setup(props,context) 内置props参数用来获取props / context对象包含attrs slots emit
    setup(props,{attrs,slots,emit}){
        console.log("props:",props.message);
        console.log("context-attrs:",attrs);
        console.log("context-slots:",slots);
        console.log("context-emit:",emit);
    }
}
</script>

<style>

</style>