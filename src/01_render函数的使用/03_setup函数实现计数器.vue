<!-- 在setup中可以不用写render() 直接返回匿名函数()=>{}再返回h() vNode对象即可 -->
<script>
    import {h,ref} from 'vue'
    export default{
        setup(){
            const counter = ref(0)
            return ()=>{
                return h("div",null,[
                    h("h2",null,`setup当前计数：${counter.value}`),
                    h("button",{
                        onClick:()=>{
                            counter.value -= 1
                        }
                    },"-1"),
                    h("button",{
                        onClick:()=>{
                            counter.value += 1
                        }
                    },"+1")
                ])
            }
        }
    }
</script>

<style scoped>

</style>