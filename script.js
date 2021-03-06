// Assignment code here

// Deployed application generates password to user specification between 8-128 characters


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
  alert("Password length must be 8-128 characters");
} 
if (characters > 128) {
alert("Password length must be 8-128 characters"); 
} 
if (characters > 8) {
console.log('I want ${characters} characters in my password');
}