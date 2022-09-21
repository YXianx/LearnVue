// 案例：实现一个抽象类，并让不同形状的子类继承，实现抽象方法，计算自己形状的的面积
// 当不确定函数的实现体的时候或者函数实现体多样化内容不固定的时候，不想用多重判断的话就可以用到抽象类抽象函数去实现

function makeArea(shape: Shape){
    return shape.getArea()
}

// 抽象函数必须放在抽象类下，且抽象函数不可以写函数体
// 抽象类不能实例化
abstract class Shape{
    abstract getArea(): number
}

// 子类继承于抽象类时，必须要实现抽象类下的抽象方法，不然会报错
// 除非子类也是抽象类，这种时候就可以不实现父类抽象类下的抽象方法
class Rectangle extends Shape{
    width: number
    height: number
    constructor(width: number,height: number){
        super()
        this.width = width
        this.height = height
    }

    // 实现抽象类
    getArea(): number {
        return this.width * this.height
    }
}

class Circle extends Shape{
    r: number
    constructor(r: number){
        super()
        this.r = r
    }
    getArea(): number {
        return this.r * this.r * 3.14
    }
}

const rect = new Rectangle(2,5)
const circle = new Circle(5)

console.log(makeArea(rect));
console.log(makeArea(circle));
