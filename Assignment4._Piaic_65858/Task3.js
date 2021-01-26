var password = prompt("Please enter your password \n" + "a. It should contain alphabets and numbers\n" + "b. It should not start with a number\n" + "c. It must at least 8 characters long");
var alphabets = /[A-Za-z]/g
var numbers = /[0-9]/g
var alp_numb = /[A-Za-z](?=.*[0-9])/g

  if(password === ""){
    alert("Password should not be empty empty")
  }
  else if(password.length<8){
    alert("Password must be of length 8");

  }
  else if(password.charAt(0).match(numbers)){
    alert("password should not be start with numbers");
  }
  else if(!password.match(alp_numb)){
      alert("Password must contain alphabets and numbers");
  }
  else{
    alert("Correct Password!")
  }
