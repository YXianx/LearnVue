// 泛型类
class Point<T>{
    x: T
    y: T
    z?: T

    constructor(x: T,y: T,z?: T){
        this.x = x
        this.y = y
        this.z = z
    }

    printPoint(){
        console.log(`{x: ${this.x} y: ${this.y} x: ${this.z??'none'}}`);
    }
}

// 书写方式1、明确指定数据类型
const p1: Point<number> = new Point(10,24)
// Array声明数组的原理就是泛型
const names: Array<string> = ["1","2"]

// 书写方式2、类型推导出来
const p2 = new Point<number>(10,24)

console.log(p1.printPoint());


export {}
