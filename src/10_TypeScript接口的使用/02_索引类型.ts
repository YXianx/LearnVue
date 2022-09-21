// (了解)接口的索引类型
interface IIndexLanguage{
    // 相当于key: number  value: string
    [index: number]: string 
}

const frontLanguage: IIndexLanguage = {
    0: "HTML",
    1: "CSS",
    2: "JavaScript",
    3: "Vue"
}