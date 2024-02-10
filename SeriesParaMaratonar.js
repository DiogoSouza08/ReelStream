document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById('prevButtonSeriesParaMaratonar');
    const nextButton = document.getElementById('nextButtonSeriesParaMaratonar');
    const carouselSeriesParaMaratonar = document.getElementById('carouselSeriesParaMaratonar');

    prevButton.addEventListener('click', function () {
        carouselSeriesParaMaratonar.scrollTo({
            left: carouselSeriesParaMaratonar.scrollLeft - 300,
            behavior: 'smooth' 
        });
    });

    nextButton.addEventListener('click', function () {
        carouselSeriesParaMaratonar.scrollTo({
            left: carouselSeriesParaMaratonar.scrollLeft + 300,
            behavior: 'smooth' 
        });
    });
});