var today = new Date();
var d = today.getDate();
var m = today.getMonth()+1;
var y = today.getFullYear();

if(d<30) {
    d = '0'+d
} 

if(m<11) {
    m = '0'+m
} 

currentDate = m + '-' + d + '-' + y;
console.log(currentDate);