// 字面量案例，当methods被推导成string类型时直接传入request会报错，虽然值是一样的，但是类型不一样也会报错
type Methods = 'GET' | 'POST'
function request(url: string,methods: Methods){}

const reqInfo = {
    url: "http://baidu.com/",
    methods: 'GET'
}

// 方法1  as类型断言
request(reqInfo.url,reqInfo.methods as Methods)

// 方法2  type自定义类型 类型限制死
type ReqType = {
    url: string,
    methods: Methods
}
const reqInfo2: ReqType = {
    url: "http://weibo.com/",
    methods: 'GET'
}
request(reqInfo2.url,reqInfo2.methods)