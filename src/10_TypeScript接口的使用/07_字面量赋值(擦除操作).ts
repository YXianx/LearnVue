interface IPerson {
    name: string,
    age: number
}

// 直接赋值由于类型推导，会把{}对象中的内容推导成一个新的对象类型而不是IPerson，因为多了个country则视为新类型，这就导致类型冲突
const p: IPerson = {
    name: "Why",
    age: 19,
    country: "BeiJing"
}

// 当先存成变量再去赋值时，ts会进行一个擦除的操作，将多余的属性先擦除freshness(变量没有被真正擦除)，这样就可以正常赋值
// 注意属性只能多不能少，也就是原本对象类型注解中规定的都必须要传，但是可以额外传递其他的
const personObj = {
    name: "John",
    age: 22,
    country: "GuangDong"
}
const p2: IPerson = personObj


export{}