// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var newPassword = document.querySelector("#password");
console.log(generateBtn);
// set parameters for possible password contents
const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", ",", "<", ">", ".", "/", "?"]

var passwordOptions = [];


var passwordLength;
var containsLowercase;
var containsUppercase;
var containsSymbols;

// Write password to the #password input
function init() {
    // requires at least one choice to be made
    if (inquireLength() == false || inquireLowercase() == false || inquireUppercase() == false || inquireSymbols() == false) {
        generateBtn.disabled = true;
        newPassword.textContent = "RELOAD PAGE AND TRY AGAIN";
        cancel();
        return;
    }
    // inquireLength();
    // inquireLowercase();
    // inquireUppercase();
    // inquireSymbols();

    //dummy protection
    if (containsLowercase == "n" && containsUppercase == "n" && containsSymbols == "n") {
        alert("You thought you were slick, huh?");
        cancel();
    }
}

function cancel() {
    generateBtn.disabled = true;
    newPassword.textContent = "RELOAD PAGE AND TRY AGAIN";
}

function inquireLength() {
    passwordLength = prompt("How long would you like your password? (8-128)");
    if (passwordLength == null) {
        return false;
    }

    // added validation
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Nice Try! Password length must be from 8 to 128");
        inquireLength();
    }
    return true;
}

function inquireLowercase() {
    containsLowercase = prompt("Would you like lowercase letters? (y/n)");
    if (containsLowercase == null) {
        return false;
    }
    // added validation
    if (containsLowercase != "y" && containsLowercase != "n") {
        alert("Close one! Answer must be entered as a y/n.");
        inquireLowercase();
    }
    return true;

}

function inquireUppercase() {
    containsUppercase = prompt("Would you like uppercase letters (y/n)");
    if (containsUppercase == null) {
        return false;
    }
    // added validation
    if (containsUppercase != "y" && containsUppercase != "n") {
        alert("You're almost getting it. I only know how to read y/n");
        inquireUppercase();
    }
    return true;
}

function inquireSymbols() {
    containsSymbols = prompt("Would you like symbols? (y/n)");
    if (containsSymbols == null) {
        return false;
    }

    if (containsSymbols != "y" && containsSymbols != "n") {
        alert("Well, you tried.");
        inquireSymbols();
    }
    return true;
}

function generatePassword() {
    var newPassword = "";
    // throws all required choices into an array
    if (containsLowercase == "y") {
        passwordOptions = passwordOptions.concat(lowerAlph);
    }

    if (containsUppercase == "y") {
        passwordOptions = passwordOptions.concat(upperCaseAlph);
    }

    if (containsSymbols == "y") {
        passwordOptions = passwordOptions.concat(symbols);
    }
    // calculates password length to be randomized
    for (let i = 0; i < passwordLength; i++) {
        //newPassword = newPassword + passwordOptions[i]
        newPassword += passwordOptions[getRandomNumber(passwordOptions.length)];
    }
    return newPassword;
}
// writes password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    writePassword();

});

// password.addEventListener("click")


init();


function getRandomNumber(passwordOptionsLength) {
    //randomizer for password
    return Math.floor(Math.random() * passwordOptionsLength);
}
