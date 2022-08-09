<template>
  <div class="tab-control">
    <div class="tab-item" 
        v-for="(item,index) in tabs" 
        @click="itemClick(index)"
        :key="index"
        ref="tabItem">
        <div class="title">
            {{item}}
        </div>
    </div>
    <div class="under-bar" :style="{left:underBarLeft+'px'}"></div>
  </div>
</template>

<script>
export default {
    emits:["changePage"],

    props:{
        tabs:{
            type:Array,
            default(){
                return []
            }
        },
    },

    data(){
        return{
            currentIndex:0,
            underBarLeft:21.75
        }
    },

    mounted(){
        this.underBarLeft = this.$refs.tabItem[0].getBoundingClientRect().left
    },

    methods:{
        itemClick(index){
            if(index === this.currentIndex)return 

            this.currentIndex = index
            this.underBarLeft = this.$refs.tabItem[index].getBoundingClientRect().left

            this.$emit("changePage",index)
        }
    }
}
</script>

<style>
    .tab-control{
        position: relative;

        width:100%;
        height:44px;
        background: #f4f4f4;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .tab-control .tab-item{
        position: relative;
        padding: 5px 10px;
    }

    .tab-control .under-bar{
        position: absolute;
        bottom: 0;
        width: 40px;
        height: 4px;
        background-color: red;

        transition: all .15s;
    }
</style>