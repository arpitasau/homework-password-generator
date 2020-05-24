const randomFunction ={
  upper : getUpperCase,
  lower : getLowerCase,
  number : getNumber,
  symbol : getSpecialCharacters,
};
//Prompt and confirm password criteria
var passwordLength = prompt("Please enter length of your password? (min 8 characters -- max 128 characters");
var upperCase = confirm("Do you want to include upper case letters?");
var lowerCase = confirm("Do you want to include lower case letters?");
var numbers = confirm("Do you want to include numeric?");
var specialChar = confirm("Do you want to include special characters?");

// Assignment Code
var generateBtn = document.querySelector("#generate");
// https://www.ascii-code.com/
// functions to generate random upperCase letter
function getUpperCase(){
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 65); 
}
console.log (getUpperCase());
// functions to generate random lowerCase letter
function getLowerCase(){
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 97); 
}
console.log (getLowerCase());
//functions to generate random number
function getNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10)+ 48); 
}
console.log (getNumber());

//functions to generate random special characters
function getSpecialCharacters(){
const symbols= "!@#$%^&*(){}[]=<>/,.";
return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log (getSpecialCharacters());

// Write password to the #password input

function writePassword() {
  const passwordLen = +passwordLength;
  var password = generatePassword(upperCase, lowerCase, numbers, specialChar, passwordLen);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/*generateBtn.addEventListener("click", () => {
  const passwordLen = +passwordLength;
  var password = generatePassword(upperCase, lowerCase, numbers, specialChar, passwordLen);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

});
*/

//generateBtn.addEventListener("click",writePassword);

function generatePassword(upper, lower, number, symbol, passwordLength) {
  var typeArr = [];
  var generatedPassword = '';
 
  if (upper) {
    typeArr.push({upper});
  }
  if (lower) {
    typeArr.push({lower});
  }
  if (number) {
    typeArr.push({number});
  }
  if (symbol) {
    typeArr.push({symbol});
  }

  //console.log('TypeArr', typeArr);
  //console.log('PasswordLength', typeof passwordLength);

  for(let i = 0; i <= passwordLength; i += typeArr.length) {
    typeArr.forEach(type => {
      const generatorFuncName = Object.keys(type)[0];
      generatedPassword += randomFunction[generatorFuncName]();
    });
  }
  console.log('Generated Password', generatedPassword.slice(0,passwordLength));
  return generatedPassword.slice(0,passwordLength);

}
