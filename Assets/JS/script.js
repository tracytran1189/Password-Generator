// Prompt for the password criteria
function generatePassword() {
    var passwordLength = window.prompt("What is the password length?");
    while (!validatePasswordLength(passwordLength) && passwordLength !== null) {
        passwordLength = window.prompt("Password length must be numeric between 8 to 128");
    };
    var passwordLowercase = window.confirm("Would you like lower case characters?");
    var passwordUppercase = window.confirm("Would you like upper case characters?");
    var passwordNumeric = window.confirm("Would you like numbers in your password?");
    var passwordSpecialChars = window.confirm("Would you like special characters?");

    //Validate the input
    var password = "";

    var typesToAdd = [];

    if (passwordLowercase) {
        typesToAdd.push('lowerCase');
    }

    if (passwordUppercase) {
        typesToAdd.push('upperCase');
    }

    if (passwordNumeric) {
        typesToAdd.push('numeric');
    }

    if (passwordSpecialChars) {
        typesToAdd.push('specialChars');
    }

    if (typesToAdd.length === 0) {
        window.alert('Pick at least one character type');
        return;
    }

    var typesToAddIndex = 0;

    for (var i = 0; i < passwordLength; i++) {

        var typeToAdd = typesToAdd[typesToAddIndex];

        switch (typeToAdd) {
            case 'lowerCase':
                password = password + getRandomLowerCaseChar();
                break;
            case 'upperCase':
                password = password + getRandomUpperCaseChar();
                break;
            case 'numeric':
                password = password + getRandomInt();
                break;
            case 'specialChars':
                password = password + getRandomSpecialChar();
                break;
        }

        typesToAddIndex++;

        if (typesToAddIndex >= typesToAdd.length) {
            typesToAddIndex = 0;
        }

    }

    return password;
}

//lowercase characters: ascii table 97 to 122
function getRandomLowerCaseChar() {
    var randomInt = Math.floor(Math.random() * 122);
    while (randomInt < 97) {
        randomInt = Math.floor(Math.random() * 122);
    }
    return String.fromCharCode(randomInt);
}

function getRandomInt() {
    return Math.floor(Math.random() * 10);
}

// Uppercase characters: ascii table 65 to 90
function getRandomUpperCaseChar() {
    var randomInt = Math.floor(Math.random() * 90);
    while (randomInt < 65) {
        randomInt = Math.floor(Math.random() * 90);
    }
    return String.fromCharCode(randomInt);
}

//Special characters: ascii table 33 to 47
function getRandomSpecialChar() {
    var randomInt = Math.floor(Math.random() * 47);
    while (randomInt < 33) {
        randomInt = Math.floor(Math.random() * 47);
    }
    return String.fromCharCode(randomInt);
}

//password length from 8 to 128 
function validatePasswordLength(passwordLength) {
    var isValid = !isNaN(passwordLength)
    if (!isValid) {
        return false;
    }
    isValid = (passwordLength >= 8 && passwordLength <= 128)
    return isValid;
}


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