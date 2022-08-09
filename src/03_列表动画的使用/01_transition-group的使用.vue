<template>
  <div>
    <button @click="addClick">添加数字</button>
    <button @click="removeClick">删除数字</button> 

    <!-- tag要设置成列表的父级元素 -->
    <!-- 新增及删除节点有动画，可其他需要移动的节点没有动画 v-move类可解决该问题 -->
    <transition-group name="why" tag="p">
        <span class="item" v-for="item in numbers" :key="item"> 
            {{item}}
        </span>
    </transition-group>
  </div>
</template>

<script>
export default {
    data(){
        return{
            numbers:[1,2,3,4,5,6,7,8],
            counter:10
        }
    },

    methods:{
        addClick(){
            let start = this.randomIndex()
            this.numbers.splice(start,0,this.counter++)
        },
        removeClick(){
            let start = this.randomIndex()
            this.numbers.splice(start,1)
        },
        randomIndex(){
            return Math.floor(Math.random() * this.numbers.length)
        }
    }
}
</script>

<style>
    .item{
        /* 使得transition：translateY生效 */
        display: inline-block;
        margin: 0 10px;
    }

    .why-enter-from,
    .why-leave-to{
        opacity: 0;
        transform: translateY(50px);

        color:cornflowerblue;
    }
    .why-enter-to,
    .why-leave-from{
        opacity: 1;
        transform: translateY(0px);

        color: #000;
    }

    .why-enter-active,
    .why-leave-active{
        transition: all 1s;
    }

    /* 加入元素其他节点有位移动画 而删除还是没有动画 这是因为删除中 先执行动画 虽然元素离开了但是其实节点还是存在着占据位置 */
    /* 这将需要在离开的时候将节点positon设置为absolute脱离当前容器 就能解决删除没动画的问题 只有删除需要特殊处理 */
    .why-leave-active{
        position: absolute;
    }
    /* 元素移动就会引用v-move */
    .why-move{
        /* transform位移 无需告诉vue需要移动多少 */
        transition: transform 1s;
    }
</style>