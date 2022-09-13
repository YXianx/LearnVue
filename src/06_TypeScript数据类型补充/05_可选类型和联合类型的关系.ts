// 1、普通的可选类型
function foo(message?: string){
    console.log(message);
}

// 可选类型可传递类型本身也可不传或者传undefined，当什么都不传时程序默认当作undefined处理
foo("213")
foo()
foo(undefined)

// 2、可选类型的本质 & 与联合类型的关系
function bar(message: string | undefined){
    console.log(message);
}
// 联合类型方式实现可选的话undefined就必须手动传入，如果不传内容就会报错，本质上和普通可选类型是一样的
bar("112")
bar()
bar(undefined)

export {}