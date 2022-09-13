// js没有类型检查和限制，只有运行时才会抛出错误提示
// foo没有对参数类型进行校验，如果自己不写多层校验会导致后续的代码都会报错
function foo(message){
    console.log(message.length);
}

foo("Hello")
foo("Low")
foo()

// 变量类型不固定，没有类型限制太松散
let bar = "123"
bar = 123