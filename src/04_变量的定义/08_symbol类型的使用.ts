// object类型中要想重复使用同个key的话就需要用到Symbol
// 如果不用ES6的symbol那么在ts中会直接报错，在js中后者会替换掉前者同名的key
let title1 = Symbol('title')
let title2 = Symbol('title')
let obj = {
    [title1]:"王花花",
    [title2]:"李银河"
}
console.log(obj);


export {}