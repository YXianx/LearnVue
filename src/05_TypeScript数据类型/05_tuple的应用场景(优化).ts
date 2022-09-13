// 利用泛型优化，使得state类型为传入的类型，且function函数参数和return的tuple类型都为正确的类型
// 返回值类型: [T,(newState)=>void]可省略自动推导
function useState<T>(state: T): [T,(newState)=>void]{
    let currentState = state
    const changeState = (newState: T)=>{
        currentState = newState
    }
    const tuple: [T,(newState: T)=>void] = [currentState,changeState]
    
    return tuple
}

const [state,setState] = useState(10)
const [flag,setFlag] = useState(true)
const [title,setTitle] = useState("12")

export {}
