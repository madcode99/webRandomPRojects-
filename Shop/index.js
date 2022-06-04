 // variables that will be used 
const slides = document.getElementsByClassName('slider_pic');
let slidePosition = 0;
const totalSlides = slides.length;
// slider btn 
document.getElementById('button-next').addEventListener('click', moveToNextSlide);
document.getElementById('button-prev').addEventListener('click', moveToPrevSlide);
// functions 
function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('slider_pic_visible');
        slide.classList.add('item_hidden');
    }
}
function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("slider_pic_visible");
}
function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("slider_pic_visible");
}