function showCard() {
    document.getElementById("user_info").style.display = "none";
    document.getElementById("petCard").style.display = "flex";
}

function showImage(event) {
    const image = document.getElementById("image_prev");
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = "block";
}


