// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Special Characters
const Symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Numbers
const Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Lowercase characters
const Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Uppercase characters
const Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt for how many characters
function generatePassword() {
var choice = window.prompt("How many characters would you like for your password? Please enter a number between 8 and 128.")

//If user didn't place a value
if (!choice)
alert("Please enter a value.")

//If input is  less than 8 or more than 128
else if (choice < 8 || choice > 128)
choice = window.prompt("You need to choose between 8 and 128.")

//Code continues because user created valid input
else if (choice > 8 && choice < 128) 
 var pickSymbols = window.prompt("Will your password contain symbols or special characters?")
 var pickNumbers = window.prompt("Will your password contain numbers?")
 var pickLower = window.prompt("Will your password contain lower case letters?")
 var pickUpper = window.prompt("Will your password contain upper case letters?")
}

//For 4 false  choices
if (!pickSymbols && !pickNumbers && !pickLower && !pickUpper) {
  alert("You must pick at least one criteria.")
}

//For single true choices
else if (pickSymbols) {
choice = pickSymbols;
}

else if (pickNumbers) {
  choice = pickNumbers;
}

else if (pickLower) {
  choice = pickLower;
}

else if (pickUpper) {
  choice = pickUpper;
}

//For two true choices

else if ()