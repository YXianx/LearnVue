<template>
    <div>
        <h2>About.vue</h2>{{msg}}
    </div>
</template>

<script>
    import emitter from './eventbus'
    export default{
        created(){
            emitter.on("myEvent",()=>{
                this.msg = "About接收到App.vue传递的event"
                console.log("About接收到App.vue传递的event");

                // 取消监听
                emitter.off("myEvent")
            })
        },
        mounted(){
            
        },
        data(){
            return {
                msg:""
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>