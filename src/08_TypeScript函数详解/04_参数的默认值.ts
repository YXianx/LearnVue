function foo(x: number,y: number = 200){
    console.log(x,y);
}
foo(2)

function bar(x: number = 10,y: number){
    // 当想用默认值并且有默认值当参数是在必选的前头时，要是不想传想用默认值则传入undefined即可
    console.log(x,y);    
}
bar(undefined,10)

