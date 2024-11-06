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
