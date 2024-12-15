//image slider

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId =null;

//initialize the slider

document.addEventListener("DOMContentLoaded", initializeSlider);


function initializeSlider() {
    
   if(slides.length > 0) {
    slides[slideIndex].classList.add("displaySLide;");
    intervalId = setInterval(nextSlide, 5000);
}
function showSlide(index){
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide({

})

function nextSlide() {
    slideIndes++;
    showSlide(slideIndex);
}
