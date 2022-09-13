// npm init
// npm install webpack webpack-cli -D
// npm install ts-loader typescript -D
// npm install babel-loader @babel/core -D
// tsc --init 生成tsconfig.json 必须有ts配置文件才能打包
// npm install webpack-dev-server -D

import {sum} from './math'
const message: string = "hello"
console.log(message);
console.log(sum(5,10));

