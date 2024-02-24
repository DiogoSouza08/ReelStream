// Paginação
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

// Barra de pesquisa e filtragem por gênero
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchIcon = document.getElementById("searchIcon");
    const moviesContainer = document.getElementById("moviesContainer");
    const moviesPages = document.querySelectorAll("[class^='page-']");
    const generoDropdown = document.getElementById("generoDropdown"); // Adicionado

    let originalMovies = [];
    let searchResults = [];

    function getOriginalMovies() {
        originalMovies = Array.from(document.querySelectorAll(".page-1 img, .page-2 img, .page-3 img, .page-4 img"));
    }

    getOriginalMovies();

    function restoreOriginalMovies() {
        moviesContainer.innerHTML = "";
        originalMovies.forEach(movie => {
            moviesContainer.appendChild(movie.parentNode);
        });
    }

    function filterMovies(query) {
        const lowerCaseQuery = query.toLowerCase();
        searchResults = originalMovies.filter(movie => {
            const movieName = movie.alt.toLowerCase();
            return movieName.includes(lowerCaseQuery);
        });
        displaySearchResults();
    }

    function filterMoviesByGenero(genero) { // Adicionado
        searchResults = originalMovies.filter(movie => {
            const movieGenero = movie.alt.toLowerCase().split('-')[0].trim(); // Obtém o gênero do filme
            return movieGenero === genero;
        });
        displaySearchResults();
    }

    function displaySearchResults() {
        moviesContainer.innerHTML = "";
        if (searchResults.length === 0) {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.textContent = "Nenhum resultado encontrado.";
            noResultsMessage.classList.add("no-results-message", "text-center", "flex","w-screen","pl-12","justify-center","items-center","text-gray-500"); 
            moviesContainer.appendChild(noResultsMessage);
        } else {
            searchResults.forEach(movie => {
                moviesContainer.appendChild(movie.parentNode);
            });
        }
    }

    function handleSearch() {
        const query = searchInput.value.trim();
        const generoSelecionado = generoDropdown.value.toLowerCase(); // Adicionado
        if (query !== "") {
            filterMovies(query);
            changePage(1);
            hidePageButtons(); 
        } else if (generoSelecionado !== "") { // Adicionado
            filterMoviesByGenero(generoSelecionado);
            changePage(1);
            hidePageButtons(); 
        } else {
            restoreOriginalMovies();
            changePage(1);
            showPageButtons(); 
        }
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

    searchInput.addEventListener("blur", function () {
        if (searchInput.value.trim() === "") {
            location.reload();
        }
    });
    
    generoDropdown.addEventListener("change", function () { // Adicionado
        handleSearch();
    });
});
