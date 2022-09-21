// ts-namespace 命名空间

// 同个文件要是想要命名相同名称函数的话，就需要用命名空间区分开来，否则直接同名会报错
// 当然除了用命名空间也可以直观的修改函数名称 timeFormat() priceFormat()
namespace time{
    export function format(){
        return '2022-9-21'
    }
}

namespace price{
    export function format(){
        return '$22.33'
    }
}

// 要想在其他模块用命名空间的内容，就需要把命名空间导出
export {
    time,
    price
}