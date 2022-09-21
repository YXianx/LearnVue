// 类中的属性必须要初始化，有初始值，否则语法检测在编译时会报错

// 可直接给属性初始值，也可在constructor构造函数中赋值
class Person {
    constructor(name: string,age: number){
        this.name = name,
        this.age = age
    }

    name: string
    age: number

    eating(){
        console.log("eating!");
    }
}

const p = new Person("啦啦啦",18)
console.log(p.name);
console.log(p.age);
