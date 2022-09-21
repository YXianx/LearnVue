// public修饰符： 默认成员变量就是public，所以可加可不加
class Person{
    public name: string = 'john'
    public age: number = 17
}

const p = new Person()
console.log(p.name);
console.log(p.age);

export {}