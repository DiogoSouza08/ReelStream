document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById('prevButtonLançamentos');
    const nextButton = document.getElementById('nextButtonLançamentos');
    const carouselLançamentos = document.getElementById('carouselLançamentos');

    prevButton.addEventListener('click', function () {
        carouselLançamentos.scrollTo({
            left: carouselLançamentos.scrollLeft - 300,
            behavior: 'smooth' 
        });
    });

    nextButton.addEventListener('click', function () {
        carouselLançamentos.scrollTo({
            left: carouselLançamentos.scrollLeft + 300,
            behavior: 'smooth' 
        });
    });
});
