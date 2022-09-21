function calc(n1: number,n2: number,fn: (n1: number,n2: number)=>number){
    return fn(n1,n2)
}

const result1 = calc(20,30,(a,b)=>{
    return a+b
})

const result2 = calc(30,50,(a,b)=>{
    return a*b
})

console.log(result1,result2);
