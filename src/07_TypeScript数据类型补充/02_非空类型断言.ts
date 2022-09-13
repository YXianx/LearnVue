// 非空类型断言，在可能为空的变量后面加上！感叹号标记
// 以下案例，message可能没值也可能有，tsconfig文件会对语法进行一个限制检查，这边检测可能为undefined，那么调用length就会报错
// 如果我们想要开发阶段能编译通过的话用两种方法
// 1、增加if语句判断
// 2、非空类型断言
function printMessageLength1(message?: string){
    console.log(message.length);
}
// 方法1
function printMessageLength2(message?: string){
    if(message)
        console.log(message.length);
}
// 方法2  非空类型断言是相当于让tsconfig文件跳过该段不检查，当我们确定可选参数一定会有值传入而不会是undefined的时候可以用！非空类型断言，省去写if判断
function printMessageLength3(message?: string){
    console.log(message!.length);
}