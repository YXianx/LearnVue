// 声明对象类型方式
// 1、字面量 or 取类型别名
type InfoType = {name: string,age: number}
const info: InfoType = {
    name: 'john',
    age: 17,
}

// 2、interface接口
// 命名规范：接口名称前加上个大写I
// 接口跟对象类型一样，没差别，用普通对象类型还是接口看自己选择
interface IInfoType {
    name: string,
    age: number
    friend?: {
        name: string
    }
}
const info2: IInfoType = {
    name: 'rose',
    age: 22,
    friend:{
        name: 'jake'
    }
}

console.log(info2.friend?.name)