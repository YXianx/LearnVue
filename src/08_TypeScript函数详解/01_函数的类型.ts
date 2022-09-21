// 函数类型的声明 ()=>void 此处并不是箭头函数而是ts中的函数声明方式
function foo(fn: ()=>void){
    fn()
}
function bar(){
    console.log("run bar function");
}
foo(bar)

// 带参数及返回值的函数类型注解
// 1、类型参数名称可以自定义，不必和实际函数的形参名字一致
// 2、函数注解当不写参数类型注解时，默认类型时any
// 3、void 代表可以返回任何东西，包括undeifned null，void是一个广泛的返回类型，不像其他语言void什么都不能返回
type AddFn = (n1: number,n2: number)=>number
const add: AddFn = (num1,num2)=>{
    return num1 + num2
}
