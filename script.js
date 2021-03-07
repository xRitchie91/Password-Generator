// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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
var questionOne = prompt("Click Ok to confirm");

if (questionOne === specialCharacter) {
  console.log("I want special characters");

} else {
  console.log("I DON'T want special characters");
}
