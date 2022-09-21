// 接口属性类型由传入的参数决定
interface IPerson<T,E>{
    name: T,
    age: E
}

const p:IPerson<string,number> = {
    name: "213",
    age: 18
}