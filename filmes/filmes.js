let selectedGenre = "todos";
let selectedGenreText = "Todos os gêneros";

function changeActive(buttonNumber) {
    var buttons = document.querySelectorAll('.join-item');
    buttons.forEach(function(button) {
        button.classList.remove('btn-active');
    });

    var activeButton = document.querySelector('.join-item:nth-child(' + buttonNumber + ')');
    activeButton.classList.add('btn-active');
}

function changePage(pageNumber) {
    var moviePages = document.querySelectorAll('[class^="page-"]');
    moviePages.forEach(function(page) {
        page.style.display = 'none';
    });

    var currentPage = document.querySelector('.page-' + pageNumber);
    currentPage.style.display = 'grid';


    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    var pageButtons = document.querySelectorAll('.join-item.btn');
    pageButtons.forEach(function(button) {
        button.classList.remove('active');
    });
    document.getElementById('page-' + pageNumber).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchIcon = document.getElementById("searchIcon");
    const moviesContainer = document.getElementById("moviesContainer");
    const generoDropdown = document.getElementById("generoDropdown");

    let originalMovies = [];
    let searchResults = [];

    function getOriginalMovies() {
        originalMovies = Array.from(document.querySelectorAll(".page-1 img, .page-2 img, .page-3 img, .page-4 img"));
    }

    getOriginalMovies();

    function restoreOriginalMovies() {
        moviesContainer.innerHTML = "";
        originalMovies.forEach(movie => {
            const moviePage = movie.closest('.movie-page');
            const pageNumber = moviePage.dataset.page;
            if (pageNumber === currentPage) {
                moviesContainer.appendChild(movie.parentNode);
            }
        });
    }

    function filterMovies(query) {
        const lowerCaseQuery = query.toLowerCase();
        searchResults = originalMovies.filter(movie => {
            const movieName = movie.alt.toLowerCase();
            const movieGenre = movie.alt.toLowerCase().split('-')[0].trim();
            return movieName.includes(lowerCaseQuery) && (selectedGenre === "todos" || movieGenre === selectedGenre);
        });
        displaySearchResults();
    }

    function filterMoviesByGenero(genero) {
        if (genero === "todos") {
            location.reload();
            return;
        }
        searchResults = originalMovies.filter(movie => {
            const movieGenero = movie.alt.toLowerCase().split('-')[0].trim();
            return movieGenero === genero;
        });
        displaySearchResults();
    }

    function displaySearchResults() {
        moviesContainer.innerHTML = "";
        if (searchResults.length === 0) {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.textContent = "Nenhum resultado encontrado.";
            noResultsMessage.classList.add("no-results-message", "text-center", "flex", "w-screen", "pl-12", "justify-center", "items-center", "text-gray-500");
            moviesContainer.appendChild(noResultsMessage);
        } else {
            searchResults.forEach(movie => {
                moviesContainer.appendChild(movie.parentNode);
            });
        }
    }

    function handleSearch() {
        const query = searchInput.value.trim();
        const generoSelecionado = generoDropdown.value.toLowerCase();
        selectedGenre = generoSelecionado;

        if (query !== "") {
            filterMovies(query);
            changePage(1);
            hidePageButtons();
        } else {
            filterMoviesByGenero(generoSelecionado);
            changePage(1);
            hidePageButtons();
        }

        searchInput.focus();
    }

    function hidePageButtons() {
        const pageButtons = document.querySelectorAll('.join-item.btn');
        pageButtons.forEach(function(button) {
            button.classList.add('hidden');
        });
    }

    function showPageButtons() {
        const pageButtons = document.querySelectorAll('.join-item.btn');
        pageButtons.forEach(function(button) {
            button.classList.remove('hidden');
        });
    }

    searchIcon.addEventListener("click", function () {
        handleSearch();
    });

    searchInput.addEventListener("input", function () {
        handleSearch();
    });

    generoDropdown.addEventListener("change", function () { 
        handleSearch();
        updateGenreSearchText();
    });

    function updateGenreSearchText() {
        const selectedGenreOption = generoDropdown.options[generoDropdown.selectedIndex].text;
        if (selectedGenreOption.toLowerCase() === "todos") {
            searchInput.placeholder = "Buscar filmes";
        } else {
            selectedGenreText = selectedGenreOption;
            searchInput.placeholder = "Buscar filmes de " + selectedGenreText;
        }
    }

    updateGenreSearchText();
    searchInput.focus();
});
