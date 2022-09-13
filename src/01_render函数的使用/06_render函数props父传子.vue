<script>
import {h} from 'vue'
import HelloWorld from './component/HelloWorld.vue';
export default{
    setup(){
        return ()=>{
            return h("div",null,[
                h(HelloWorld,{
                    // 传入prop给子组件
                    someProp:"啦啦啦"
                })
            ])
        }
    }
}
</script>

<style scoped>

</style>