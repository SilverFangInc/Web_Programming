//New code by Scott at line 106!!!!!!

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

        return isValid;
    }

    // click the button and does it work
    checkPassword.addEventListener("click", function() {
        if (validatePassword()) {
            showCard();
        }
    });
});

//this function when next is clicked, will make the display for petCard visible and the sign up not display.
function showCard() {
    document.getElementById("user_info").style.display = "none";
    document.getElementById("petCard").style.display = "flex";
}
// this will preview the image onto the page onces its uploaded, I need to add CSS that controls the size of the picture preview.
function showImage(event) {
    const image = document.getElementById("image_prev");
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = "block";
}

let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("Dog_img");
  
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++; //increment the slideIndex 
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  //show the current slide
    setTimeout(showSlides, 1000); // Change image and dot every 4 seconds
}

//increases the like and dislike number in LeaderBoard.html (NEW CODE!!!!!)
let like1 = 1;
function likeButton1() {
    document.getElementById("like1").innerHTML = like1++;
}

let like2 = 1;
function likeButton2() {
    document.getElementById("like2").innerHTML = like2++;
}

let like3 = 1;
function likeButton3() {
    document.getElementById("like3").innerHTML = like3++;
}

let like4 = 1;
function likeButton4() {
    document.getElementById("like4").innerHTML = like4++;
}

let like5 = 1;
function likeButton5() {
    document.getElementById("like5").innerHTML = like5++;
}

let like6 = 1;
function likeButton6() {
    document.getElementById("like6").innerHTML = like6++;
}


let dislike1 = 1;
function dislikeButton1() {
    document.getElementById("dislike1").innerHTML = dislike1++;
}

let dislike2 = 1;
function dislikeButton2() {
    document.getElementById("dislike2").innerHTML = dislike2++;
}

let dislike3 = 1;
function dislikeButton3() {
    document.getElementById("dislike3").innerHTML = dislike3++;
}

let dislike4 = 1;
function dislikeButton4() {
    document.getElementById("dislike4").innerHTML = dislike4++;
}

let dislike5 = 1;
function dislikeButton5() {
    document.getElementById("dislike5").innerHTML = dislike5++;
}

let dislike6 = 1;
function dislikeButton6() {
    document.getElementById("dislike6").innerHTML = dislike6++;
}

