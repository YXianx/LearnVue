<template>
  <div>
    <input type="text" v-model="keyword">
    <!-- tag要设置成列表的父级元素 -->
    <transition-group name="why" tag="ul" :appear="true" :css="false"
                      @enter="enter"
                      @leave="leave">
        <li v-for="(item,index) in search" :key="item" :data-index="index">{{item}}</li>
    </transition-group>
  </div>
</template>

<script>
// 导入gsap js动画库
import gsap from 'gsap'

export default {
    data(){
        return{
            names:["abc","cba","why","lilei","hmm","kobe","james"],
            keyword:""
        }
    },

    methods:{
        // transition-group生命周期钩子
        enter(el,done){
            // el是节点对象 节点对象设置了data-index存储index值，通过el.dataset.index就可以取到值
            // 通过设置每个节点的delay属性可以使得节点效果逐个执行（index * 0.2使得每个节点的动画触发时间随着顺序而不一样）
            gsap.to(el,{
                opacity:1,
                height:"1.2em",
                delay:el.dataset.index * 0.2,
                onComplete:done
            })
        },
        leave(el,done){
            gsap.to(el,{
                opacity:0,
                height:0,
                delay:el.dataset.index * 0.2,
                onComplete:done
            })
        }
    },
    
    computed:{
        search(){
            return this.names.filter(item=>item.includes(this.keyword))
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

    /* transition css实现动画 该案例的列表交替动画使用js实现 :css=false不检测css 则下列css无效 */
    .why-enter-from,
    .why-leave-to{
        opacity: 0;
        transform: translateX(20px);
    }
    .why-enter-to,
    .why-leave-from{
        opacity: 1;
        transform: translateX(0px);
    }
    .why-enter-active,
    .why-leave-active{
        transition: all 1s;
    }

    .why-leave-active{
        position: absolute ;
    }
    .why-move{
        transition: transform 1s;
    }
</style>