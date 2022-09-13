<script>
import {h,ref} from 'vue'
import NavBar from './component/NavBar.vue'
export default{
    setup(props){
        return ()=>{
            return h("div",{class:"app"},[
                h(NavBar,{
                    someProps:"Xianx"
                },{
                    default:props=>h("i",`自定义default内容 slotProps:${props.msg} props:${props.nSomeProps}`),
                    foo:()=>h("div",null,"自定义foo内容")
                })
            ])
        }
    }
}
</script>

<style scoped>
    .app{
        background-color: bisque;
    }
</style>