// tuple返回any及functon函数
// 问题：不管state传入的是什么类型都会视为any，之后也会作为any再return回去
function useState(state: any){
    let currentState = state
    const changeState = (newState: any)=>{
        currentState = newState
    }
    // [any,(newState: any)=>void] 函数类型写法，并不是直接在元组中写function关键词！
    const tuple: [any,(newState: any)=>void] = [currentState,changeState]
    
    return tuple
}

const [state,setState] = useState(10)
console.log(state);
setState(19)
console.log(state);
