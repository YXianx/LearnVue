// 案例：Person中有name age，Student和Teach都会有各自的名称 年龄，所以我们需要让继承的时候能够顺便把参数也赋给父类
// 手动调用修改父类成员变量也可但是需要给初始化的死值，并且调用修改如果参数很多的话就很麻烦
class Person{
    name: string
    age: number

    constructor(name: string,age: number){
        this.name = name
        this.age = age 
    }

    eating(){
        console.log("eat food");
    }
}

// 做法：在子类中利用 super构造器 调用父类的构造函数，对成员变量初始化
class Student extends Person{
    sno: number = 0

    constructor(name: string,age: number,sno: number){
        super(name,age) // 构造函数初始化父类的成员变量
        this.sno = sno  // 初始化自己类的sno
    }

    studying(){
        console.log("studying everyday");
    }
}

const stu = new Student("王花花",17,207107)
console.log(`sno: ${stu.sno} name: ${stu.name} age: ${stu.age}`);


export {}