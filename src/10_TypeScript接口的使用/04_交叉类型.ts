// 交叉类型，相当于规定必须有同时拥有这两种类型
// 而联合类型是规定有其中一种类型即可
interface ISwim {
    swimming: ()=>void
}
interface IFly {
    flying: ()=>void
}

// 交叉类型 拥有二者
type MyType = ISwim & IFly
// 联合类型 拥有其一
type MyType2 = ISwim | IFly

const obj: MyType = {
    swimming(){

    },
    flying(){

    }
}

const obj2: MyType2 = {
    flying(){

    }
}

export {}