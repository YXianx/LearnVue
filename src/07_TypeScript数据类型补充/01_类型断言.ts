// 类型断言的作用是把一个范围比较广的类型转为一个确定的类型

// 案例1、HTMLElement & HTMLImageElement
// const EL = document.getElementById('pp') 此时typesctript自动推导出EL是一个HTMLElement类型
// EL.src 当我们传入的是<img/>标签的id时，我们期望的是ts能够推导出当前类型是HTMLImageElement，这样我们调用src才不会报错，可目前还是推断的HTMLElement，这个定义太广了
// const EL = document.getElementById('imgEL') as HTMLImageElement
// EL.src = "link"

// 案例2、class类继承
class Person{
    say(){
        console.log('hi world');
    }
}

class student extends Person{
    studying(){
        console.log("studying");
    }
}
// student继承与person，所以也属于person，可以作为参数传入，但是要想用student本身的api时就需要类型断言，否则会报错找不到api
function foo(p: Person){
    (p as student).studying();
}
const stu = new student()
foo(stu)
stu.say()


// 3、(了解)as可以转为any类型和unknow类型作为中介，再转为制定数据类型 
// 了解即可，不推荐使用，这样做是逃过编译阶段的语法检测，容易数据类型混乱
let a: number = 1323
let b: string = (a as any) as string // 直接a as string 在开发阶段就会立马报错，当先转为any再转string时就可以 

export {}
