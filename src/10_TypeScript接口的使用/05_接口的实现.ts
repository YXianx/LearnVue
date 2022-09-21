// 继承：类只能单继承
// 实现：类可以实现多个接口

// 在定义接口的时候内容是没有具体实现的，相当于abstract抽象方法，只定义不实现
interface ISwim{
    speed: number
    swimming: ()=>void
}
interface IRun{
    running: ()=>void
}

class Animal{
    action(){
        console.log("animal action");
    }
}

// implements关键字实现接口，也就是接口内的内容都需要在类中实现
class wildAnimal extends Animal implements ISwim,IRun{
    speed = 10
    swimming(){

    }
    running(){

    }
}

// 编写公共API：面向接口编程  
function swimAction(swimable: ISwim){
    swimable.swimming()
}

class Person implements ISwim{
    speed = 10
    swimming(){
        console.log("person swimming")
    }
}
// 所有实现ISwim接口的话就可以传入
swimAction(new Person())