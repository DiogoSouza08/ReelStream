document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById('prevButtonPopulares');
    const nextButton = document.getElementById('nextButtonPopulares');
    const carouselPopulares = document.getElementById('carouselPopulares');

    prevButton.addEventListener('click', function () {
        carouselPopulares.scrollLeft -= 300; // 
    });

    nextButton.addEventListener('click', function () {
        carouselPopulares.scrollLeft += 300; // 
    });
});