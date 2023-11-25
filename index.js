function realtimeclock() {
  // Using date for getting whole date and time
  var rtclock = new Date();
  // Getting everything separetely

  var HH = rtclock.getHours();
  var MM = rtclock.getMinutes();
  var SS = rtclock.getSeconds();

  // Setting AM & PM
  var amPM = HH < 12 ? "AM" : "PM";
  // Converting 12 hours timing

  HH = HH > 12 ? HH - 12 : HH;

  HH = ("0" + HH).slice(-2);
  MM = ("0" + MM).slice(-2);
  SS = ("0" + SS).slice(-2);

  // Display the clock

  document.getElementById("clock").innerHTML =
    HH + " : " + MM + " : " + SS + amPM;
  var t = setTimeout(realtimeclock, 500);
}
