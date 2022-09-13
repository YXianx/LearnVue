// 作用1: 当不确定当前变量类型的时候可以使用any注解
// 作用2: 部分类型转换时直接转换会报错，需要先转换成any再转换成目标类型就不会报错
// 注意！！！如果大量使用any那就跟原来的js没区别，因为any没有类型限制，什么都能传递，哪怕是没有的属性去掉用都不会报错，这显然是不安全的

let message: any = "123"
message = 22
message = false
message()

console.log(message.name);
