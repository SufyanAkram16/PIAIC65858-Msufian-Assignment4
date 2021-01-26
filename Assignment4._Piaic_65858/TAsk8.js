var num = Number(prompt("PLease enter a number"));
var numStr = num.toString();


var int_unit = ["","one","two","three","four","five","six","seven","eight","nine","Ten","Eleven","Tweleve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","nineteen"];
var int_tens = ["","","Twenty","Thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninety"];


if(num<0){ // error on negative number
    alert("Negative number is not supported");
}
if (num === 0){
    document.write("Zero")
}
if(num < 20){ // checks number from 1-19
    document.write(int_unit[num]);
}

if(numStr.length === 2){

    document.write(int_tens[numStr[0]] + " " + int_unit[numStr[1]]);
}

if(numStr.length ===3){
    if(numStr[1] === "0" && numStr[2] === "0"){
        document.write(int_unit[numStr[0]] + " hundred");
    } else{
        document.write(int_unit[numStr[0]] + " hundred and " + int_tens[numStr[1]] + " " + int_unit[numStr[2]]);
    }
}

if(numStr.length === 4){
    if(numStr[1] === "0" && numStr[2] === "0" && numStr[3] === "0"){
        document.write(int_unit[numStr[0]] + " thousand");
    }
       else if (numStr[1] === "0" && numStr[2] === "0"){
        document.write(int_unit[numStr[0]] + " thousand and " + int_unit[numStr[3]]);
    }
    else if(numStr[1] === "0"){
        document.write(int_unit[numStr[0]] + " thousand and " + int_tens[numstr[2]] + " " + int_unit[numStr[3]]);
    } 
    else{
        document.write(int_unit[numStr[0]] + " thousand " + int_unit[numstr[1]] + " hundred and " + int_tens[numStr[2]] + int_unit[numstr[3]]);
    }
}
