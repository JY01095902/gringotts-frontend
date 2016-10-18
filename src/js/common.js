export function formatDate(date, formatString){
    var o = { 
        "M+" : date.getMonth()+1, //month 
        "d+" : date.getDate(), //day 
        "h+" : date.getHours(), //hour 
        "m+" : date.getMinutes(), //minute 
        "s+" : date.getSeconds(), //second 
        "q+" : Math.floor((date.getMonth()+3)/3), //quarter 
        "S" : date.getMilliseconds() //millisecond 
    } 

    if(/(y+)/.test(formatString)) { 
        formatString = formatString.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    } 

    for(var k in o) { 
        if(new RegExp("("+ k +")").test(formatString)) { 
        formatString = formatString.replace(RegExp.$1, RegExp.$1.length===1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
        } 
    } 
    
    return formatString; 
}

export function arrayContains (array, value)
{
    for(let item of array){
        if (item === value){
            return true;
        }
    }
}

export function arrayRemove(array, value){
    const index = array.indexOf(value);
    if(index > -1){
        array.splice(index, 1);
    }
    return array;
}