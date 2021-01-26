var date = new Date();

var dayOfMonth = date.getDate();

if(dayOfMonth<16){
    document.write("First fifteen days of month");
}
else {
    document.write("Last days of the month");
}