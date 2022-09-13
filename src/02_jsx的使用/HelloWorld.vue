<script>
    import {h} from 'vue'
    export default{
        render(){
            // 接收插槽，传入的插槽是一个对象，对象使用要用{}括起来
            return (
                <div>
                    <h2>Hello World.vue</h2>
                    {this.$slots.default ? this.$slots.default() : <i>我是默认插槽内容</i>}
                </div>
            )
        }
    }
</script>

<style scoped>

</style>