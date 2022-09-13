<!-- render和h函数编写能够充分利用vue的特性，但是相对的代码很难读也不好写 -->
<!-- jsx默认vue是不认识的，需要通过babel对其进行转化 -->
<!-- jsx的优势是能够任意使用js的语法相比于render 和 h -->
<!-- 一般来说写组件库可能会用到jsx -->
<!-- jsx语法和react类似 -->

<script>
    import {ref} from 'vue'
    import HelloWorld from './HelloWorld.vue' 

    export default{
        setup(){
            const counter = ref(0) 
            const increment = ()=>{
                counter.value += 1
            }
            const decrement = ()=>{
                counter.value -= 1
            }

            // setup中写render函数写成匿名函数即可
            return ()=>{
                // 在return的()括号中写html比较规范美观且可换行
                // 注意！！！jsx中引用变量不是写{{}}单个{}即可 包括事件函数的调用都是单括号{}切不需要写双引号
                // jsx和h函数两种写法都是比较贴近于原生的js(比如事件监听onClick)
                // 事件都是以onX的格式写的，自定义事件也是一样比如自定义发送emit为emitClick 那么监听的时候就需要写onEmitClick

                // 传入插槽的本质是传入一个对象，传入对象的话要用{}括起来，再在里面写要传入的对象体
                return (
                    <div>
                        <h2>当前计数：{counter.value}</h2>
                        <button onClick={decrement}>-1</button>
                        <button onClick={increment}>+1</button>
                        <HelloWorld>
                            {{default:props=> <button>我是按钮</button>}}
                        </HelloWorld>
                    </div>
                )
            }
        }
    }
</script>

<style scoped>

</style>