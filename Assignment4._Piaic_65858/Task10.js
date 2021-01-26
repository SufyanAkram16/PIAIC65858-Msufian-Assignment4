var input = parseFloat(prompt("Enter a value to round:"));

var dPoint = parseInt(prompt("How many decimal places you want to round the number?"));

document.write("You Entered :" + input + "<br>" );
document.write("Number after round off to " + dPoint + " decimal points:" + input.toFixed(dPoint));