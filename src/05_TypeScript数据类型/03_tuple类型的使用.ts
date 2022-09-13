// tuple元组：多种数据类型的组合，用数组方式保存且又能知道每个元素的变量类型

// arr:any[] = [1,"john"] 也可实现，但是拿到的元素都是any类型的，而非元素本身的类型
// obj={id:1,name="john"} 也能实现，但是需要写key，相对于元组来说比较麻烦,有时候比如遍历的时候，有key就不好遍历

let tuple: [number,string] = [1,"john"]
let id = tuple[0]
let name = tuple[1]
console.log(tuple);

export {}