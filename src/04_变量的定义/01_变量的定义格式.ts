// 1、类型注解
// 2、string和String的区别(小写类型和大写的区别)
// 3、类型推导

// 类型注解  ts中推荐使用let const 不推荐var
var name: string = "why"
let age: number = 17
const height: number = 1.75

// string：ts中的字符串类型
// String：js中的字符串类
const message: string = "Hello World"

// 类型推导  当不指定类型时，会根据赋的值来推导变量类型，且赋值过后变量类型就绑定成赋值的类型
let foo = "normal"
// foo = 112

// 模块化，避免文件直接变量冲突
export {}