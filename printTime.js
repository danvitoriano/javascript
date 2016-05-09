function printTime(){
    var date = new Date;
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return document.body.innerHTML = hour +":"+minutes +":"+seconds;
}
setInterval(printTime ,1000)
