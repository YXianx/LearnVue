import {ref, watch} from 'vue'
export default function(key,value){
    const data = ref(value)
    if(value){
        // JSON.stringify序列化，不管传入的是对象、数组还是其他什么都转成JSON字符串存储
        window.localStorage.setItem(key,JSON.stringify(value))
    }
    else{
        // JSON.parse 将JSON字符串转为原来的数据类型
        data.value = JSON.parse(window.localStorage.getItem(key))
    }

    watch(data,(newValue,oldValue)=>{
        window.localStorage.setItem(key,newValue)
    })

    return data
}