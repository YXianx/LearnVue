// object类型能推导出来就不写注解，当加上object时，取值会取不到，提示默认的object中没有该属性
// 自动推导则不会又这个问题出现
const obj: object = {
    name:"john",
    age:17
}

const obj2 = {
    name:"john",
    age:17
}

console.log(obj.name);
console.log(obj2.name);
