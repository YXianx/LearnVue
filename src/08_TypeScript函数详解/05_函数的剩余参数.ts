// 函数的剩余参数,可传多个值也可不传，例如console.log 可以无限传入参数进行打印，因为log的剩余参数类型是 ...data: any[]
// 较为常用，很灵活，需要掌握！
function sum(a: number,b: number,...nums: number[]){
    let result = a + b
    for(let i of nums){
        result += i
    }

    return result
}

console.log(sum(1,2,4,1,1,1,1));
console.log(sum(5,5,2,5));
console.log(sum(5,5));

export {}