// Assignment code here

// variables declared
var generateBtn = document.querySelector("#generate");
var length;
var uppers;
var lowers;
var numbers;
var specials;
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseLettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowercaseLettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharactersArray = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@",];

function passwordLength() {
  length = prompt("How many characters do you want in your password? Must be 8-128 characters long");

  if (length < 8 || length > 128) {
    alert("Your password must be 8-128 characters");

    passwordLength();
  }
  return length;
}

function passwordOptions() {
  lowers = confirm("Do you want lowercase letters?");
  uppers = confirm("Do you want upper case letters?");
  numbers = confirm("Do you want numbers?");
  specials = confirm("Do you want special characters?");

  // if false 
  if (
    lowers === false &&
    uppers === false &&
    numbers === false &&
    specials === false
  ) {
    alert("You must choose at least one");
    passwordOptions();
  }
  return lowers, uppers, numbers, specials;
}

// function to generate password
function generatePassword() {
  passwordLength();
  passwordOptions();

  var passwordGenArray = [];
  var guaranteed = [];
  var randomNum;
  var randomChar;

  if (uppers) {
    // pick random character from uppercaseLettersArray and add it to the guaranteed array
    randomNum = Math.floor(Math.random() * uppercaseLettersArray.length); // gives you a random number between 0 and 26
    randomChar = uppercaseLettersArray[randomNum];
    guaranteed.push(randomChar) 
    passwordGenArray = passwordGenArray.concat(uppercaseLettersArray);
  }
  if (lowers) {
    // pick random character from lowercaseLettersArray and add it to the array
    randomNum = Math.floor(Math.random() * lowercaseLettersArray.length); // gives you a random number between 0 and 26
    randomChar = lowercaseLettersArray[randomNum];
    guaranteed.push(randomChar)
    passwordGenArray = passwordGenArray.concat(lowercaseLettersArray);
  }
  
  if (specials) {
    // pick random character from specialCharactersArray and add it to the array
    randomNum = Math.floor(Math.random() * specialCharactersArray.length); // gives you a random number between 0 and 15
    randomChar = specialCharactersArray[randomNum];
    guaranteed.push(randomChar) // ["p", "R", "9", "$"]
    passwordGenArray = passwordGenArray.concat(specialCharactersArray);
  }
  if (numbers) {
    // pick random character from numbersArray and add it to the array
    randomNum = Math.floor(Math.random() * numbersArray.length); // gives you a random number between 0 and 10
    randomChar = numbersArray[randomNum];
    guaranteed.push(randomChar) // ["p", "R", "9"]
    passwordGenArray = passwordGenArray.concat(numbersArray);
  }

  console.log(passwordGenArray);
  console.log(guaranteed); // ["p", "R", "9", "$"]

  var password = ""; //"pR9$"

  for (var i = 0; i < length; i++) {
    console.log(length);
    var randomNumber = Math.floor(Math.random() * passwordGenArray.length);
    var randomCharacter = passwordGenArray[randomNumber];
    password = password + randomCharacter;
    console.log(password);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var animals = ["duck" ,"dog", "fish", "panda"];

animals[3]

passwordGenArray = ["a", "b", "c"];
var index = 0;
passwordGenArray[index]