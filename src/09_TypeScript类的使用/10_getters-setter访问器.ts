// get set访问器 替代之前的自定义函数setName() getName()
class Person{
    private _name: string
    private _age: number

    constructor(name: string,age: number){
        this._name = name
        this._age = age
    }

    // get set 访问器
    set name(newValue){
        this._name = newValue
    }

    get name(){
        return this._name
    }
}

const p = new Person('john',12)
// 通过get set访问器 获取或设置_name 注意！调用访问器不是像调用函数的方式一样，是跟调用变量的方式一样
p.name = 'xianx'
console.log(p.name);


export {}