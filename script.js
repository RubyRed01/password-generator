// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var newPassword = document.querySelector("#password");

  newPassword.value = password;

}

//Special Characters
const symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Numbers
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Lowercase characters
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Uppercase characters
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var pickSymbols;
var pickNumbers;
var pickLower;
var pickUpper;
var choice;
var userin;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt for how many characters
function generatePassword() {
userin = window.prompt("How many characters would you like for your password? Please enter a number between 8 and 128.")

//If user didn't place a value

if (!userin){
alert("Please enter a value.")
}


//If input is  less than 8 or more than 128
else if (userin < 8 || userin > 128) {
alert("You need to choose between 8 and 128.")
}


//Code continues because user created valid input
else if (userin > 8 && userin < 128) {
 pickSymbols = confirm("Will your password contain symbols or special characters?")
 pickNumbers = confirm("Will your password contain numbers?")
 pickLower = confirm("Will your password contain lower case letters?")
 pickUpper = confirm("Will your password contain upper case letters?")
}

//For 4 false  choices
else if (!pickSymbols && !pickNumbers && !pickLower && !pickUpper) {
  alert("You must pick at least one criteria.")
}


//For single true choices
else if (pickSymbols) {
choice = symbols;
}


else if (pickNumbers) {
  choice = numbers;
}


else if (pickLower) {
  choice = lower;
}


else if (pickUpper) {
  choice = upper;
}


//For two true choices
else if (pickSymbols && pickNumbers) {
choice = symbols.concat(numbers)
}


else if (pickSymbols && pickLower)
choice = symbols.concat(lower)


else if (pickSymbols && pickUpper) {
  choice = symbols.concat(upper)
}


else if (pickNumbers && pickLower) {
  choice = numbers.concat(lower)
}


else if (pickNumbers && pickUpper) {
  choice = numbers.concat(upper)
}


else if  (pickLower && pickUpper) {
  choice = lower.concat(upper)
}


//For three true choices
else if (pickSymbols && pickNumbers && pickLower) {
  choice = symbols.concat(numbers, lower)
}

else if (picksymbols && pickNumbers && pickUpper) {
  choice = symbols.concat(numbers, upper)
}


else if (pickSymbols && pickLower && pickUpper) {
  choice = symbols.concat(lower, upper)
}

else if (pickNumbers && pickLower && pickUpper) {
  choice = numbers.concat(lower, upper)
}

var password = []

for (var i = 0; i < choice; i++) {
  var pickChoices = choice[Math.floor(Math.random() * userin.length)];
  password.push(pickChoices)
}

var newPassword = password.join("");
    UserInput(newPassword);
    return newPassword;

function UserInput(newPassword) {
   document.getElementById("password").textContent = newPassword;
}

}