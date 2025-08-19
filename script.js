const passLength = document.getElementById("passwordLength");
const generateBtn = document.getElementById("generateBtn");
const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSpecial = document.getElementById("includeSpecial");
const strengthLevel = document.getElementById("strengthLevel");
const generatedPassword = document.getElementById("generatedPassword");
const copyBtn = document.getElementById("copyBtn");

let options = passLength.options;

let inputValue;

let uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
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
let lowercaseArray = [
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
let numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
];

let finalPassword = [];

let passWord = "";

function copyPassword() {
  if (passWord === "") {
    alert("Please first make a password!");
  } else {
    alert(`You copied ${passWord}`);
  }
}

function checkStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength <= 2) return "Weak 🔴";
  if (strength === 3 || strength === 4) return "Medium 🟡";
  if (strength === 5) return "Strong 🟢";
}

function generatePassword() {
  if (finalPassword.length > 0) {
    passWord = "";
    for (let i = 0; i < inputValue; i++) {
      let random =
        finalPassword[Math.floor(Math.random() * finalPassword.length)];
      passWord += random;
    }
    strengthLevel.textContent = checkStrength(passWord);
    generatedPassword.value = passWord;
  }
}

function checkValidation() {
  for (let i = 0; i < options.length; i++) {
    let selected = options[i].selected;
    if (selected) inputValue = Number(options[i].value);
  }

  finalPassword = [];

  if (includeUppercase.checked)
    finalPassword = finalPassword.concat(uppercaseArray);
  if (includeLowercase.checked)
    finalPassword = finalPassword.concat(lowercaseArray);
  if (includeNumbers.checked)
    finalPassword = finalPassword.concat(numbersArray);
  if (includeSpecial.checked)
    finalPassword = finalPassword.concat(specialArray);

  if (
    !includeUppercase.checked &&
    !includeLowercase.checked &&
    !includeNumbers.checked &&
    !includeSpecial.checked
  ) {
    generatedPassword.value = "";
    alert("No checkbox selected!");
  }
  generatePassword();
}

generateBtn.addEventListener("click", checkValidation);
copyBtn.addEventListener("click", copyPassword);
