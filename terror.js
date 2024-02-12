document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById('prevButtonTerror');
    const nextButton = document.getElementById('nextButtonTerror');
    const carouselTerror = document.getElementById('carouselTerror');

    prevButton.addEventListener('click', function () {
        carouselTerror.scrollTo({
            left: carouselTerror.scrollLeft - 300,
            behavior: 'smooth' 
        });
    });

    nextButton.addEventListener('click', function () {
        carouselTerror.scrollTo({
            left: carouselTerror.scrollLeft + 300,
            behavior: 'smooth' 
        });
    });
});