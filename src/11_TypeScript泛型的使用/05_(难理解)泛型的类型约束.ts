// 对泛型可传递参数类型进行限制
// 案例：获取数组和字符串的lenght长度
// 以下写法会报错，因为T可以是任何类型，如果我们传入的是数字，而数字没有length属性则会报错
// function getLength<T>(arg: T){
//     return arg.length
// }
// getLength(123)

// 我们希望该泛型可传入的参数必须携带有length属性，这就需要用到泛型的类型约束
// 对其作限制就需要用到extends继承，声明必须满足某个类型
// 下面案例声明泛型继承于ILength接口，表示传入的参数必须是继承于ILength的，也就是说必须有length参数的对象值才可
interface ILength{
    length: number
}
function getLength<T extends ILength>(arg: T){
    return arg.length
}
getLength("213")
getLength([1,2,3,4])
getLength({length:100})
