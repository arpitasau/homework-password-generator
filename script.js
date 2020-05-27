const randomFunction = {
  upper : getUpperCase,
  lower : getLowerCase,
  number : getNumber,
  symbol : getSpecialCharacters,
};

//DOM elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// https://www.ascii-code.com/
// functions to generate random upperCase, lowerCase, number and special characters
function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 65); 
}
function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 97); 
}
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10)+ 48); 
}
function getSpecialCharacters() {
  const symbols= "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  setTimeout(function() {
    var password = generatePassword();
    passwordText.value = password;
  }, 100);
}
function reloadAndDisplay() {
  passwordText.value = '';  
  writePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", reloadAndDisplay);

function generatePassword() {
  var passwordCriteriaArr = [];
  var generatedPassword = '';
  
  //Prompting for password length
  var passwordLength = prompt("Please enter length of your password (min 8 characters - max 128 characters)");
  const passwordLen = +passwordLength;

  if (passwordLen < 8 || passwordLen > 128) {
    alert('Password length must be in between 8 - 128 characters');
    return generatedPassword;
  }
var upperCase = confirm("Do you want to include upper case letters?");
var lowerCase = confirm("Do you want to include lower case letters?");
var numbers = confirm("Do you want to include numbers?");
var specialChar = confirm("Do you want to include special characters?");

//Declaring keys for the randomFunction object
var upper, lower, number, symbol;

//Adding Objects to passwordCriteriaArr depending on user's selection
  if (upperCase) {
    passwordCriteriaArr.push({upper});
  }
  if (lowerCase) {
    passwordCriteriaArr.push({lower});
  }
  if (numbers) {
    passwordCriteriaArr.push({number});
  }
  if (specialChar) {
    passwordCriteriaArr.push({symbol});
  }
  if (passwordCriteriaArr.length === 0){
    alert ('Atleast one character type needs to be selected');
    return generatedPassword;
  }
  for(let i = 0; i <= passwordLen; i += passwordCriteriaArr.length) {
    passwordCriteriaArr.forEach(criteria => {
      const generatorFuncName = Object.keys(criteria)[0];
      generatedPassword += randomFunction[generatorFuncName]();
    });
  }

  return generatedPassword.slice(0,passwordLen);
}
