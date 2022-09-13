const message:string = "213"
console.log(message);

function foo(payload:string){
    console.log(payload);
}

foo("test msg")

// 写上export 代表当前ts是一个单独的模块，这样可以解决ts检测到当前文件的变量声明和其他文件的变量名称冲突
export{}