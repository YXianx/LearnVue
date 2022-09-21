// 枚举项规范写法是全字母大写
// 枚举默认从0开始，当有赋值时，就从赋值为起始数
// 枚举类型使得代码阅读性强
enum Direction {
    LEFT=3,
    RIGHT,
    TOP,
    BOTTOM
}

function turnDirection(direction: Direction){

}

// 阅读性的体现
turnDirection(3)  
turnDirection(Direction.LEFT)