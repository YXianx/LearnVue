// 接口直接也是可以继承的
// 想把两个类型接口合并在一起的话可以通过继承实现
// 接口只能继承接口，不能接口implement实现接口！
interface ISwim {
    swimming: ()=>void
}

interface IRun {
    running: ()=>void
}

// 接口可以继承多个
interface IAction extends ISwim,IRun{

}

const obj: IAction = {
    swimming(){

    },
    running(){

    }
}

export {}
