// 可选链的作用是当对象中的属性！不存在为空的时候会短路，不继续往下执行返回undefined，如果存在才继续执行
// 可选链操作符：?.  用于对象中属性的调用判断，不能用于普通变量

type Person = {
    name: string,
    friend?: {
        name: string
        age?: number,
        girlFriend?: {
            name?: string 
        }
    },
}

const info: Person = {
    name: 'why',
    friend:{
        name: 'kobe',
        age: 18,
        girlFriend:{
            name: 'lily'
        }
    },
}

// console.log(info.friend.name);
// 当info没有friend值时，而我们又调用了friend内部属性，tsconfig就会检测出来报错。
// 错误解决方法：
// 1、非空类型断言，逃过语法检测，虽然开发阶段不报错了，但是到了编译阶段就会报错
// 2、if判断，这样可以解决报错的问题，但是如果内部属性很多的话，那就需要一一if判断 if(info.friend){log(info.friend.name)}
// 3、可选链，当属性有值时才用，没有则短路不向下执行返回undefined,省去if判断属性是否为空！
console.log(info.friend?.name);
console.log(info.friend?.age); 
console.log(info.friend?.girlFriend?.name);
