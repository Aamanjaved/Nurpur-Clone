// script.js
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderWrapper = document.querySelector('.slider-wrapper');

let index = 0;

function updateSlider() {
    const cardWidth = document.querySelector('.card').offsetWidth + 30; // 30px margin
    sliderWrapper.style.transform = `translateX(${-index * cardWidth}px)`;
}

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = document.querySelectorAll('.card').length - 1;
    }
    updateSlider();
});

nextButton.addEventListener('click', () => {
    if (index < document.querySelectorAll('.card').length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateSlider();
});

// Initial update
updateSlider();