import * as R from 'ramda'

export function Ftime (date) {
   
   var dateTime = new Date(date);
   var year = dateTime.getFullYear();
   var month = dateTime.getMonth() + 1;
   var day = dateTime.getDate();
   var hour = dateTime.getHours();
   var minute = dateTime.getMinutes();
   var second = dateTime.getSeconds();
   //当前时间
   var now = Date.parse(new Date());  //typescript转换写法
   var milliseconds = 0;
   var timeSpanStr;
   //计算时间差
   milliseconds = now/1000 - Date.parse(date)/1000;

   //一分钟以内
   if (milliseconds <= 60) {
       timeSpanStr = '刚刚';
   }
   //大于一分钟小于一小时
   else if (60 < milliseconds && milliseconds <= 60 * 60) {
       timeSpanStr = Math.ceil((milliseconds / (60))) + '分钟前';
   }
   //大于一小时小于等于一天
   else if (60 * 60 < milliseconds && milliseconds <= 60 * 60 * 24) {
       timeSpanStr = Math.ceil(milliseconds / (60 * 60)) + '小时前';
   }
   //大于一天小于等于15天
   else if (60 * 60 * 24 < milliseconds && milliseconds <= 60 * 60 * 24 * 30) {
       timeSpanStr = Math.ceil(milliseconds / (60 * 60 * 24)) + '天前';
   }
   //大于一个月小于一年
   else if (60 * 60 * 24 * 30 < milliseconds && milliseconds <= 60 * 60 * 24 * 30 * 12){
       timeSpanStr = Math.ceil(milliseconds / (60 * 60 * 24 * 30)) + '个月前';
   }
   //超过一年显示
   else {
       timeSpanStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute;   
   }
   return timeSpanStr;
}

export function getClassNameById(classList,classId){
    let themeClass = R.find(R.propEq('nId',classId))(classList); 
    if(themeClass == undefined)
        return '';
    return themeClass.cName;
}