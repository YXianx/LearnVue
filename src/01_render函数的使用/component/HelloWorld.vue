<script>
    import {h} from 'vue'

    export default{
        // 如果是setup则用setup(props)内置的props对象获取值
        props:{
            someProp:String
        },

        render(){
            return h("div",null,[
                h("h2",null,`Hello World.vue`),
                // 如果default插槽有被传入，则用传入的h()如果没有则创建默认的h()
                // 作用域插槽，将name传递出去
                this.$slots.default ? this.$slots.default({name:"coder why"}) : h("span",null,this.someProp? `我是组件的默认插槽 接收到prop：${this.someProp}` : "我是组件的默认插槽")
            ])
        }
    }
</script>

<style scoped>

</style>