// 1、只读属性可以在构造函数中赋值，之后值就再也不能被更改
// 2、属性本身不能进行修改，但是如果是只读的对象属性，那么只读对象中的非只读属性是可以被更改的！
class Person{
    readonly name: string
    age: number
    readonly friend?: Person

    // 1、
    constructor(name: string,age: number,friend?: Person){
        this.name = name
        this.age = age
        this.friend = friend
    }
}

const p = new Person('john',17,new Person('rose',27))
console.log(p.name);


// 2、
if(p.friend){
    p.friend.age = 23
    console.log(p.friend);
}

// 2的只读对象概念相当于const的理念
const a = {age: 123}
// a = {age: 21} 直接赋新的对象就会报错，因为const是常量
a.age = 21  // 给对象内的属性赋值则不会报错

export {}