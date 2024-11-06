document.addEventListener("DOMContentLoaded", function() {
    var password = document.getElementById("password");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var errorMessage = document.getElementById("errorMessage");
    var checkPassword = document.getElementById("checkPassword");

    // this will look at passwords and see if they match the criteria
    function validatePassword() {
        var isValid = true;

        // is there lowercase letter???
        var lowerCaseLetters = /[a-z]/g;
        if (password.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
            isValid = false;
        }

        // is there uppercase letter???
        var upperCaseLetters = /[A-Z]/g;
        if (password.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
            isValid = false;
        }

        // number present????
        var numbers = /[0-9]/g;
        if (password.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
            isValid = false;
        }

        // is it 8 or more then 8 longwise??????
        if (password.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
            isValid = false;
        }

        // are you wrong
        if (!isValid) {
            errorMessage.style.display = "block";  // Show error message
        } else {
            errorMessage.style.display = "none";  // Hide error message
        }
    }

    // click the button and does it work
    checkPassword.addEventListener("click", function() {
        validatePassword();
    });
});
