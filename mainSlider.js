document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById("prevButtonMain");
    const nextButton = document.getElementById("nextButtonMain");
    const avatarCard = document.getElementById("avatarCard");
    const backgroundElement = document.getElementById("backgroundElement");
    const movieTitle = document.getElementById("movieTitle");
    const movieDescription = document.getElementById("movieDescription");
    const movieYear = document.getElementById("movieYear");
    const movieRating = document.getElementById("movieRating");
    const movieGenre = document.getElementById("movieGenre");
    const classificacao = document.getElementById("classificacao");

    const cardImages = [
        "./src/imagesMain/card-Avatar.jpg",
        "./src/imagesMain/card-oppenheimer.jpg",
        "./src/imagesMain/card-JhonWick4.jpg" 
    ];

    const backgroundImages = [
        "./src/imagesMain/bg-Avatar2.jpg",
        "./src/imagesMain/bg-oppenheimer.jpg",
        "./src/imagesMain/bg-jhonw4.jpg" 
    ];

    const movieTitles = [
        "Avatar: O Caminho da Água",
        "Oppenheimer - O filme",
        "John Wick 4: Baba Yaga" 
    ];

    const movieDescriptions = [
        "Jake Sully e Ney'tiri, após formarem uma família, enfrentam uma antiga ameaça em Pandora, levando-os a travar uma guerra contra os humanos para proteger seu lar e seu povo.",
        "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.",
        "O ex-assassino de aluguel John Wick esta sendo procurado pelo mundo todo e a recompensa por sua captura aumenta cada vez mais ao longo da sua jornada."
    ];

    const movieYears = [
        "2023",
        "2023",
        "2023" 
    ];

    const movieRatings = [
        "8.2/10",
        "7.9/10",
        "7.5/10"
    ];

    const movieGenres = [
        "Ação/Ficção científica",
        "Suspense/Ação",
        "Ação/Thriller" 
    ];

    const classificacoes = [
        "12",
        "16",
        "16"
    ];

  
    let currentIndex = 0;

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + cardImages.length) % cardImages.length;
        updateSlide(currentIndex);
    });

    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % cardImages.length;
        updateSlide(currentIndex);
    });

    function updateSlide(index) {
        avatarCard.style.backgroundImage = `url('${cardImages[index]}')`;
        backgroundElement.style.backgroundImage = `url('${backgroundImages[index]}')`;
        movieTitle.textContent = movieTitles[index];
        movieDescription.textContent = movieDescriptions[index];
        movieYear.textContent = movieYears[index];
        movieRating.textContent = movieRatings[index];
        movieGenre.textContent = movieGenres[index];
        classificacao.textContent = classificacoes[index];
        backgroundElement.style.backgroundColor = backgroundColors[index];
    }

    updateSlide(currentIndex);
});
