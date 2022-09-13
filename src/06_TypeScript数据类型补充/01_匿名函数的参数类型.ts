// 1、普通函数的参数不加类型注解默认为any，不会对上下文进行推导
function foo(message){

}

// 2、匿名函数的参数类型会根据上下文去推导出来，例如forEach的item，根据上下文推导出item是string类型
//   所以匿名函数参数的类型注解可加可不加，且不加也不会被认为是any
const names: string[] = ["joke","john","rose"]

names.forEach((item) => {
    console.log(Object.prototype.toString.call(item))
});

export {}

