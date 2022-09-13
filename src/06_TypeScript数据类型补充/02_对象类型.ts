// 设置函数参数类型为对象，且对象里一定要有x/y属性
function printPoint(point:{x: number,y: number}){
    console.log(point.x);
    console.log(point.y);
}

// 正确传参
printPoint({x:199,y:21})

// 错误传参
// printPoint(1,3)
// printPoint({})
