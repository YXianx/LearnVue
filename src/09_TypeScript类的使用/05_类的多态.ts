// 继承和接口才能表现出多态
// 多态的目的是为了写出更加具有通用性的代码
class Animal{
    action(){
        console.log("animal action");
    }
}

// 重写
class Dog extends Animal{
    action(): void {
        console.log("dog running !");
    }
}

class Fish extends Animal{
    action(): void {
        console.log("fish swimming !");
    }
}

// Dog 和 Fish都继承于Animal 所以本质上也是属于Animal类型的
function makeAction(animals: Animal[]){
    // 父类引用指向子类对象 这就是多态 所以虽然都是Animal类型 但是都会去子类中执行自己的action 得出的结果都不一样
    animals.forEach(animal => {
        animal.action()
    })
}

makeAction([new Dog(),new Fish()])

export {}