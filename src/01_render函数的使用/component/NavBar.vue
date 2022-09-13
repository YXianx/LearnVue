<script>
import { h, render } from 'vue';

export default{
    props:{
        someProps:String
    },
    setup(props,{slots}){
        return ()=>{
            return h("div",null,[
                slots.default ? slots.default({msg:"coderwhy",nSomeProps:props.someProps}) : h('i',null,`this is default slot`),
                slots.foo ? slots.foo({nSomeProps:props.someProps}) : h('div','未传入foo插槽内容')
            ])
        }
    }   
}
</script>

<style scoped>

</style>