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


function weather() {
  var location = document.getElementById("location");
  var apiKey = "29588a59053d7a58f9d5aae93dc9722e";
  var url = "https://api.forecast.io/forecast/";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitute = position.coords.longitude;

    location.innerHTML = 
      "Latitude is " + latitude + " Longitude " ;

    $.getJSON(
      url + apiKey + "/" + latitude + "," + longitue + "?callback=?",
      function(data) {
        $("#temp").html(data.currently.temperature + "F");
        $("#minutely").html(data.minutely.summary);
      }
    );
  }
  function error(){
    location.innerHTML = "Unable to retrieve your location";
  }
  location.innerHTML = "Locating...";
}
weather();

