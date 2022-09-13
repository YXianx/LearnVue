// 可给函数注解取个自定义名称，省的每次写一长串
type func = ()=>void

const test: func = ()=>{}

// 函数类型注解是写箭头函数，而不是写function，因为function是关键字
const foo: ()=>void = function(){
    
}

// 元组中函数类型注解也一样
const arr: [number,()=>void] = [1,()=>{console.log(11);}]

// 返回值类型可写可省略,ts会自动推导
function sum(a: number,b: number): number{
    return a+b
}

export {}