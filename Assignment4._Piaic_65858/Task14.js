var date = new Date();
var hrs = date.getHours();
document.write("Current date : " + date);
date = new Date();
var newDate = date.setHours(hrs-1);
document.write( "<br>1 Hour ago it was :" + date);

