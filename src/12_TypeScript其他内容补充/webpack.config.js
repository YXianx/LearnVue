const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:"development",
    entry: "./src/main.ts",
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:"./bundle.js"
    },
    // webpack默认不能自动找到.ts后缀的文件，不写汇报错，如果导入ts文件时不想写后缀则需要自定义extensions设置自动查找.ts
    // 此处由于自定义覆盖掉默认的，导致dev-server等其他一些库由于省略了.js后缀，而此处又没添加.js就会报错，需要添加上！
    resolve:{
        extensions:[".ts",".js",".cjs",".json"]
    },
    module:{
        rules:[
            {
                test:/\.ts$/i,
                loader:"ts-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html",
            title:"webpack-ts"
        })
    ]
}