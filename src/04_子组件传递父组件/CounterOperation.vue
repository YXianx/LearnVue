<template>
    <div class="operations">
        <input type="text" v-model="num">
        <button @click="sub">-</button>
        <button @click="add">+</button>
        <button @click="addN">+{{num}}</button>
    </div>
</template>

<script>
export default {
    // vue3 emits
    
    // 声明子组件传递的事件 使得组件内有什么传递给父组件的事件可以很直观的看出来，并且写了emits后，写父组件监听事件也会有提示补全
    // emits:['add','sub','addN'],

    // emits对象写法的目的是对参数进行验证  参数不对return false则浏览器抛警告
    emits:{
        add:null,
        sub:null,
        addN:(num,msg)=>{
            if(num>0){
                return true
            }

            return false
        }
    },

    data(){
        return{
            num:0
        }
    },

    methods:{
        add(){
            this.$emit('add')
            console.log("+1");
        },
        sub(){
            this.$emit('sub')
            console.log("-1");
        },
        addN(){
            this.$emit('addN',this.num,"Hello")
        }
    }
}
</script>

<style>

</style>