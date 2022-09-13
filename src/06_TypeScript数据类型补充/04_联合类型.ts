// 联合类型使得参数可以是规定的几种类型当中的其中一种
function printId(id: number | string){
    // 使用联合类型的时候要特别小心，因为参数类型的不同，所继承的api函数也不同，所以需要做一些边缘判断
    // 例如当传入的是字符串类型时就转为小写字母，那么当传入的是number时，很明显number类型没有toLowerCase()就会报错
    if(typeof id === 'string'){
        console.log(id.toLowerCase());
    }
    else
        console.log(Object.prototype.toString.call(id),id);
}

printId(123)
printId("ABC")