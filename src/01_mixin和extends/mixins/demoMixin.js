export const demoMixin = {
    data(){
        return{
            message:"你好呀 李银河"
        }
    },
    methods:{
        demoClick(){
            console.log("触发了demoMixin中的demoClick");
        }
    },
    created(){
        console.log("demoMixin created");
    }
}