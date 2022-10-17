// Assignment code here
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharList = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// created function make random integer
function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  return Math.floor(max * Math.random());
}

// created function getRandomItems from the list.
function getRandomItems(list) {
  return list[randomInt(list.length)];
}
// created generatePassword function
function generatePassword() {
  var userInput = prompt("How long would you like your password to be?");
  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    alert("That is not a number!");
    return;
  }
  // created condition for generatedPassword function
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }
  // confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var userInputNumbers = confirm(
    "Would you like to include numbers in your password?"
  );
  var userInputLowerCases = confirm(
    "Would you like to include lower cases in your password?"
  );
  var userInputUpperCases = confirm(
    "Would you like to include upper cases in your password?"
  );
  var userInputSpecialChars = confirm(
    "Would you like to include special characters in your password?"
  );

  var optionList = [];

  if (userInputNumbers === true) {
    optionList.push(numberList);
  }
  if (userInputLowerCases === true) {
    optionList.push(lowerCaseList);
  }
  if (userInputUpperCases === true) {
    optionList.push(upperCaseList);
  }
  if (userInputSpecialChars === true) {
    optionList.push(specialCharList);
  }

  var generatePassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItems(optionList);
    var randomChar = getRandomItems(randomList);
    generatePassword += randomChar;
  }
  return generatePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
