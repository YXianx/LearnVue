// protected 成员修饰符 protected修饰的成员变量仅在本类中，及被继承的子类中能被调用，在外部调用就会报错
class Person{
    protected name: string = 'john'
    protected age: number = 20

    getAge(): number{
        return this.age
    }
    setAge(age: number){
        this.age = age
    }
}

class Student extends Person{
    constructor(){
        super() // 不加super ts不知道我们是要重写父类的构造函数还是执行父类的构造函数再重写
        console.log(this.name);
        console.log(this.age);
    }
}

const stu = new Student()


