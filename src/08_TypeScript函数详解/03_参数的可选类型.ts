// 2个参数及以上时，可选类型必须写在必选类型的后面！
// y本质相当于 y: number | undefined 联合类型
function foo(x: number,y?: number){

}

foo(2)
foo(3,5)

export {}