var age = parseInt(prompt("Enter Your age"));
 var today = new Date();
 var currentYear = today.getUTCFullYear();
 var birthYear = currentYear - age ;
 document.write("Your age is :" + age + "<br>Your Birth year is :" + birthYear)