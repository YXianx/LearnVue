// 单引号双引号都可以 看项目的具体规范
let message1 = 'hello world'
let message2 = "Hello World"
 
// 如果类型可以推导出来，一般不加类型注解,当发现推导出来不是准确的类型而是any时就需要加注解
const name = 'why'
const age = 18

let message3 = `info:{name:${name},age:${age}}`

console.log(message3);

export {}