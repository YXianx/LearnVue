// ??运算符的作用是当当前变量有值就用当前变量，如果当前为 undefined或者null 就用默认值
// ??的作用跟三元运算符以及||一样
// 虽然||也可以实现，但是||的出现并不是为了干这个的，本质是为了做if判断的，所以尽可能还是用??运算符
const message: string|null = null

console.log(message || "你好呀，李银河");
console.log(message ?? "??运算符的默认值");


