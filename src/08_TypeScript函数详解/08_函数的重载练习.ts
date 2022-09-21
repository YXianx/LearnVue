// 根据场景及代码实现的复杂度去选择用联合类型还是重载
// 不要无脑用，有时候重载的代码量反而更大跟复杂

// 重载实现
function printLength(args: any[]): number;
function printLength(args: string): number;

function printLength(args: any): any{
    return args.length
}

// 联合类型实现
function printLengthLH(args: any[] | string){
    return args.length
}

console.log(printLength([12,2,3]));
console.log(printLengthLH("123"));

