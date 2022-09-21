// interface接口允许名称重复
// 当接口名称重复时，会自动对重名接口做一个合并，引用一个接口时也要实现其他同名的接口内容
interface IFoo {
    name: string
}
interface IFoo{
    age: number
}

const bar:IFoo = {
    name: "",
    age: 3
}

// 允许名称重复有什么意义？
// 比如我们想在Window对象中添加自定义的age属性，通过接口名称重复会合并的这样特性就能做到，这也是type所不能做到的
interface Window{
    age: Number
}
console.log(window.age)