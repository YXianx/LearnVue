import { ref,watch } from "vue"

export default function(title="default title"){
    const titleRef = ref(title)
    // watch监听title更改，更改的话就重新设置标题
    watch(titleRef,(newValue,oldValue)=>{
        document.title = newValue
    },{
        immediate:true
    })
    
    return titleRef
}