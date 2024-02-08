document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById('prevButtonLiveActions');
    const nextButton = document.getElementById('nextButtonLiveActions');
    const carouselLiveActions = document.getElementById('carouselLiveActions');

    prevButton.addEventListener('click', function () {
        carouselLiveActions.scrollTo({
            left: carouselLiveActions.scrollLeft - 300,
            behavior: 'smooth' 
        });
    });

    nextButton.addEventListener('click', function () {
        carouselLiveActions.scrollTo({
            left: carouselLiveActions.scrollLeft + 300,
            behavior: 'smooth' 
        });
    });
});