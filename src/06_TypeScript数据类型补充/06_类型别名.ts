// 在之前的案例中，用到了{x: number,y: number} 及 number | string | boolean三种联合类型作为函数的参数
// 如果我们是以声明变量后再给函数传参的话，那么声明函数要写一次，声明变量时又要写一次，而且都很长一串，这时候就可以取个别名

// 1、普通方式
function foo(point:{x: number,y: number}){
    console.log(point.x);
    console.log(point.y);
}

const mousePoint: {x:number,y: number} = {x: 213,y:29}
foo(mousePoint)

// 2、取别名方式
type PointType = {x: number,y: number}
type UnionType = string | number | boolean

function bar(data: PointType){

}
const nowPoint: PointType = {x:0,y:0}
bar(nowPoint)

export {}


