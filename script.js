// Assignment code here
const passwordForm = document.getElementById("passwordBox");
const minPassLength = 8;
const maxPassLength = 128;
let specialCharsCheckbox = document.getElementsByName("specialChars")[0];
let numbersCheckbox = document.getElementsByName("numbers")[0];
let lwrCharsCheckbox = document.getElementsByName("lwrChars")[0];
let upprCharsCheckbox = document.getElementsByName("upprChars")[0];

// Function to generate password
function createPassword() {

  // Define character sets 
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseletters = lowercaseLetters.toUpperCase();
  const numbersList = "0123456789";
  const specialCharacters = "!@#$%^&*()_+{}|:?><[]";

  // Define checkbox states and where they are 
  lettersLow = document.getElementsByName("lwrChars")[0].checked;
  lettersHigh =  document.getElementsByName("upprChars")[0].checked;
  numbers = document.getElementsByName("numbers")[0].checked;
  specials = document.getElementsByName("specialChars")[0].checked;

  

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