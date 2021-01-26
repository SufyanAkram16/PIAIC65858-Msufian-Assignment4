var input = prompt("Enter a number");

var res = input.split("");
var sum=0;
for(var i=0; i<res.length; i++){
    sum += Number(res[i]);
}
var avg = sum / res.length;
document.write("You entered:" + input + "<br>"+ "Sum of all Digits:" + sum + "<br>" + "Mean of all Digits:" + avg);