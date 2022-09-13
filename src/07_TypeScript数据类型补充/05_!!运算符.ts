// 变量转为Boolean类型
// 方法1
// Boolean(message),直接转换且值正确
// 方法2
// 在变量前加上 ! 就可以将变量转为布尔类型，但是由于是！所以还做了一个取反的操作导致值不准确
// 方法3
// 要想拿到正确的值就得!!，相当于两次取反，第一次取反是类型转换，第二次取反是转为正确的值
// 注意!!本身属于javascript的特性，不属于ts

const message: string = "Hello World"
const flag: boolean = Boolean(message)
const flag2: boolean = !!message
console.log(flag);
console.log(flag2);


export {}