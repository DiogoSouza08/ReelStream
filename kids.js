document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById('prevButtonKids');
    const nextButton = document.getElementById('nextButtonKids');
    const carouselKids = document.getElementById('carouselKids');

    prevButton.addEventListener('click', function () {
        carouselKids.scrollTo({
            left: carouselKids.scrollLeft - 300,
            behavior: 'smooth' 
        });
    });

    nextButton.addEventListener('click', function () {
        carouselKids.scrollTo({
            left: carouselKids.scrollLeft + 300,
            behavior: 'smooth' 
        });
    });
});
