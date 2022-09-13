// unknown用于对接收类型不确定的时候使用，由于不知道具体类型所以不能乱给其他类型的变量赋值
// unknown变量只能接收数值，和赋值给any ｜ unknown类型的变量，unknown变量赋值给其他变量时都会报错
// any太灵活随意用(随意赋值)，unknown灵活且有限制不会被乱用(仅可赋值any｜unknown)
let flag = true
let result: unknown

const foo = function(){
    return "foo"
}
const bar = function(){
    return 129
}

if(flag){
    result = foo()
}
else{
    result = bar()
}

let num: number = result
let normal: unknown = result
let info: any = result

export {}