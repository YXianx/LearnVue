// 未指定数组内的元素是什么类型的，超级不推荐这样写，没有对元素类型做限制
const addr: [] = []

// 一定要保证数据内的元素类型都是相同的

// 方式1 泛型 不推荐 在jsx中该写法会冲突有问题
const id: Array<string> = ["123"]

// 方式2 常用
const names: string[] = ["jack","john","rose"]
