// 类型缩小的过程，简而言之就是加条件慢慢确定类型，在开发里如果想确定某个类型的话加会经常用到类型缩小。
// 当类型缩小到具体类型时，代码才会有api提示，如果多个类型一起的时候，代码不会有提示

// 1、typeof类型缩小
type IDType = number | string
function printID(id: IDType){
    console.log(id);    // 此处是IDType类型
    if(typeof id === 'string'){ // if判断是类型保护
        console.log(id.toUpperCase()); // 此处只会是string类型  
    }
    else{
        console.log(id); // 此处只会是number类型
    }
}

// 2、平等的类型缩小(=== == !=/switch)
type DirType = 'left' | 'top' | 'right' | 'bottom'
function printDirection(direction: DirType){
    switch(direction){
        case 'left':
            console.log(direction); // direction类型被缩小到left
            break;
    }
}

// 3、instanceof 判断变量是否是该类下的实例，如果是则类型缩小,注意！instanceof只能跟实例跟类进行判断，不能变量跟类型进行判断！
function printDate(time: string | Date){
    if(time instanceof Date){   // 判断time是否时Date下的实例
        console.log(time.toUTCString());    // 此处为Date
    }
    else{
        console.log(time);  // 此处为string
    }
}

// 3-1、案例
class Student{
    studying(){

    }
}
class Teacher{
    tearching(){

    }
}
function printUser(user: Student | Teacher){
    if(user instanceof Student){
        user.studying()
    }
    else{
        user.tearching()
    }
}

// 4、in in是判断属性是否存在，而instanceof是判断实例，不要搞混
// 当属性存在于字面量中，则类型缩小
type Dog = {
    running:()=>void
}
type Fish = {
    swimming:()=>void
}
function walk(animal: Dog | Fish){
    // swimming属性是否在animal里，如果存在animal则为Fish字面量类型
    if('swimming' in animal){
        animal.swimming()
    }
    else{
        animal.running()
    }
}
const fish: Fish = {
    swimming:()=>{
        console.log("swimming");
    }
}