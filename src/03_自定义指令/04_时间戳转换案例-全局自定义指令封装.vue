<template>
    <div>
        <!-- 全局自定义指令，且可根据参数转换对应格式的时间 -->
        <h2 v-format-time="'HH:mm:ss'">1660464130</h2>
    </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
    // 简单局部时间戳转换指令实现，完整实现在全局指令中
    // directives:{
    //     formatTime:{
    //         mounted(el,bindings) {
    //             let textCotent = el.textContent
    //             let timeTemp = parseInt(textCotent)

    //             if(textCotent.length == 10){
    //                 timeTemp = timeTemp * 1000  // 转为毫秒
    //             }
                
    //             el.textContent = dayjs(timeTemp).format("YYYY-MM-DD HH:mm:ss")
    //         },
    //     }    
    // },

    setup(){
    }
}
</script>
<style lang="">
    
</style>