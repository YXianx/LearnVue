// 泛型类型可以有多个
// 案例：传递两个泛型参数

// 泛型类型可以自定义，但是最好命名遵循规范
/* 泛型类型缩写规范
   T：Type的缩写，类型
   K、V：key、value的缩写，键值对
   E：element的缩写，元素
   O：object的缩写，对象
*/
function foo<T,E,O>(arg1: T,arg2: E,arg3: O,...args: T[]){
     
}

foo<string,number,boolean>("why",17,false,"23","23")


// 泛型也可设置可选参数，但是泛型声明不可省<x,x>
function bar<T,O>(arg1: T,arg2?: O){

}
bar<number,{name:string}>(10)

export {}

