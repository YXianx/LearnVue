// ts的重载函数(overload)跟其他语言的写法都不一样，很关键！ 

// 上面写重载函数的声明
function add(n1: number,n2: number): number;
function add(n1: string,n2: string): string;

// 下面写重载函数的实现
function add(n1: any,n2: any): any{
    if(typeof n1 === 'string')
        return n1.length + n2.length
        
    return n1+n2
}

// 调用函数的时候，参数必须匹配到上面的重载函数，虽然重载函数的实现是any类型，但是是不能乱传的
// 有重载时，实现函数是不能直接被调用的！
console.log(add("Hello","World"));
console.log(add(10,20));


export {}