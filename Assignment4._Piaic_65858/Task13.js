var currentDate = new Date(); //current date
var milisec = currentDate.getTime(); // miliseconds since 1970
var currentMinutes = currentDate.getMinutes(); // get the minutes 4rm current date
var minutes = (milisec - currentMinutes)/(60*1000); // convert miliseconds to minutes
// var allMinutes = Math.floor(minutes) // round off minutes
document.write("Current Date: " + currentDate + "<br>");
document.write("Elapsed milliseconds since Jan 1,1970: " + milisec + "<br>");
document.write("Elapsed Minutes since Jan 1,1970: " + minutes) ;





