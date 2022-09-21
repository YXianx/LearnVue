// super相当于父类的对象，可以作为构造器也可以调用父类函数

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

// 方式1、覆盖重写函数
class Student extends Person{
    sno: number = 0

    constructor(name: string,age: number,sno: number){
        super(name,age) // 构造函数初始化父类的成员变量
        this.sno = sno  // 初始化自己类的sno
    }

    studying(){
        console.log("studying everyday");
    }

    // 如果不满意父类中的函数实现，可以声明同名函数，对函数进行重写
    eating(): void {
        console.log("eating!");
    }
}
const stu = new Student("王花花",17,207107)
// 继承关系中，当子类下找不到所调用的函数声明，则会去父类中找函数
stu.eating()

console.log('--------------------------------------');


// 方式2、super.fn 在原有基础上添加重写内容，简而言之就是先执行一遍原有的函数内容，在执行重写的函数内容
class Teach extends Person{
    id: string

    constructor(name: string,age: number,id: string){
        super(name,age)
        this.id = id
    }
    // super.fn() 调用要重写的函数，就可以先执行一遍，在往下执行我们重写的内容
    eating(): void {
        super.eating()
        console.log("teach no time eating");
    }
} 
const tea = new Teach("李华",22,"hyx20111")
tea.eating()

export {}