// private 成员变量修饰符 注意只能修饰成员变量，不能修饰类！
// 私有成员变量名称一般用下划线开头
class Person{
    private _name: string = 'john'
    private _age: number = 18

    getName(): string{
        return this._name
    }
    setName(name: string){
        this._name = name
    }
}

const p = new Person()
console.log(p.getName());
p.setName('rose')
console.log(p.getName());



export {}