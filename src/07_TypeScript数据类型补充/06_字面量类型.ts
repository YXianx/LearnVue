// 字面量类型使得可以用字面量当作类型注解，但是相应的，该变量也就只能赋值字面量，赋值其他的会报错！
const message: "hello world" = "hello world"
const age: 17 = 17

// 以上的字面量类型用法纯属为了展示其用法，没实际作用
// 字面量必须和联合类型一块才有实际的作用！,用来约束可以传入的数据！
// 如果传递的不是联合类型中的字面量类型的其中一种则会报错
let align: 'left'|'top'|'right'|'bottom' = 'left'
align = 'top'
align = 'right'
align = 'bottom'
// align = 'center'

let num: 12|32|51 = 12

export {}