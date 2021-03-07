// Assignment code here
//// create arrays for all lowercase, upercase, numeric, and special characters & a variable for the password string
let caseArray=[];
let lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let numericChar=["1","2","3","4","5","6","7","8","9","0"];
let specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

// Function to generate password
function generatePassword() {
  passwordLength();
  passwordOptions();

  var passwordGenArray = [];
  var guaranteed = [];
  var randomNum;
  var randomChar;



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

var characters = prompt("How many characters would you like in your password?");

if (characters < 8) {
  alert("Sorry! Password length can't be shorter than 8 characters");
} 
if (characters > 128) {
alert("Sorry! Password length can't be longer than 128 characters"); 
} 
if (characters > 8) {
console.log('I want ${characters} characters in my new password');
}

// Special characters
var specialCharacter = true;
var questionOne = confirm("Click Ok to confirm");

if (questionOne === specialCharacter) {
  console.log("I DO want special characters");

} else {
  console.log("I DON'T want special characters");
}

// Numeric characters
var numericCharacter = true;
var questionTwo = confirm("Click Ok to confirm");

if (questionTwo === numericCharacter) {
  console.log("I DO want numeric characters");
} else {
  console.log("I DON'T want numeric characters");
}

// Uppercase characters 
var upperCase = true;
var questionThree = confirm("Click OK to confirm");


if (questionThree === upperCase) {
console.log("I DO want uppercase characters");
} else {
  console.log("I DON'T want uppercase characters");
}

// Lowercase characters 
var lowerCase = true;
var questionFour = confirm("Click OK to confirm");


if (questionFour === lowerCase) {
console.log("I DO want lowercase characters");
} else {
  console.log("I DON'T want lowercase characters");
}

// If neither, loop question again 
alert("You must choose one");

console.log("I do NOT want numeric characters");
