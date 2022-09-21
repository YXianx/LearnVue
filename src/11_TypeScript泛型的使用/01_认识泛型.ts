// 案例：编写一个函数，使得传入的类型和返回的类型一致
// 如果用any那么返回的类型也是any会造成类型丢失，如果用联合类型那么要写太多联合类型和边缘判断不方便，所以泛型是最合适的
// T是Type的缩写 可以写T也可以写Type
function sum<T>(arg: T): T{
    return arg
}

// 1、明确传入泛型类型 相当于sum<number>(arg: number): number
sum<number>(50)
sum<{name: string}>({name: 'why'})
sum<any[]>([1,2,3])

// 2、如果不传类型，采用类型推导的方式，那么推导出来的变量类型是字面量 也就是sum<50>(arg:50): 50 而非sum<number>(arg: number): number
sum(50)

// 泛型的作用就是函数体的返回值类型注解由传入的参数类型决定，较为灵活