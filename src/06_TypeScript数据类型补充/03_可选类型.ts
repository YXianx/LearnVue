// 需要设置可选类型参数时，在参数名称后面加个？问号即可
function printPoint(point: {x: number,y: number,z?: number}){
    console.log(point.x);
    console.log(point.y);
    console.log(point.z);
}

// 未传的参数则为undefined
printPoint({
    x:1,
    y:36
})

printPoint({
    x:35,
    y:89,
    z:115
})

export {}