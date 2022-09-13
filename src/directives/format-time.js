import dayjs from 'dayjs'
export default function formatTime(app){
    app.directive("format-time",{
        mounted(el,bindings) {
            let formatString = "YYYY-MM-DD HH:mm:ss"
            let newFormat = bindings.value
            if(newFormat){
                formatString = newFormat
            }

            let textContent = el.textContent
            let timeTemp = parseInt(textContent)

            // 判断时间戳格式是否正确
            if(textContent.length === 10){
                // 转换为ms毫秒
                timeTemp = timeTemp * 1000
            }

            // 利用dayjs转换时间戳
            el.textContent = dayjs(timeTemp).format(formatString)
        },
    })
}