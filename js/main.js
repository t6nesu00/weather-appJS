function startTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    // check for minute and second if its less than 10
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById("tdate").innerHTML = d.toDateString();
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function(){startTime()}, 1000);

}
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}
