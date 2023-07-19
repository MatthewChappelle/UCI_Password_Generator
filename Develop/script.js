// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// set parameters for possible password contents
const lowerAlph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const upperCaseAlp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const numbers = ["1","2","3","4","5","6","7","8","9","0"]

const symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",";",":",",","<",">",".","/","?"]

// Write password to the #password input

function generatePassword() {
var newPassword = "";
  for (let i = 0; i < 5; i++) {
    newPassword += i;
    
  // newPassword += i;
// newPassword = (newPassword + i);

  return newPassword;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);