<!-- render函数实现计数器 -->
<script>
    import {h} from 'vue'
    import HelloWorld from './component/HelloWorld.vue'
    // render中组件无需注册直接写入h函数渲染
    export default{
        render(){
            return h("div",null,[
                h("h1",null,"App.vue"),
                h(HelloWorld,null,{
                    // props 作用域插槽
                    default:props=>h("i",null,`我是App传入的自定义插槽 携带作用域props：${props.name}`)
                })
            ])
        }
    }
</script>

<style scoped>

</style>