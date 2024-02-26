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
    var seriesPages = document.querySelectorAll('[class^="page-"]');
    seriesPages.forEach(function(page) {
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
    const seriesContainer = document.getElementById("seriesContainer");
    const generoDropdown = document.getElementById("generoDropdown");

    let originalseries = [];
    let searchResults = [];

    function getOriginalseries() {
        originalseries = Array.from(document.querySelectorAll(".page-1 img, .page-2 img, .page-3 img, .page-4 img"));
    }

    getOriginalseries();

    function restoreOriginalseries() {
        seriesContainer.innerHTML = "";
        originalseries.forEach(series => {
            const seriesPage = series.closest('.series-page');
            const pageNumber = seriesPage.dataset.page;
            if (pageNumber === currentPage) {
                seriesContainer.appendChild(series.parentNode);
            }
        });
    }

    function filterseries(query) {
        const lowerCaseQuery = query.toLowerCase();
        searchResults = originalseries.filter(series => {
            const seriesName = series.alt.toLowerCase();
            const seriesGenre = series.alt.toLowerCase().split('-')[0].trim();
            return seriesName.includes(lowerCaseQuery) && (selectedGenre === "todos" || seriesGenre === selectedGenre);
        });
        displaySearchResults();
    }

    function filterseriesByGenero(genero) {
        if (genero === "todos") {
            location.reload();
            return;
        }
        searchResults = originalseries.filter(series => {
            const seriesGenero = series.alt.toLowerCase().split('-')[0].trim();
            return seriesGenero === genero;
        });
        displaySearchResults();
    }

    function displaySearchResults() {
        seriesContainer.innerHTML = "";
        if (searchResults.length === 0) {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.textContent = "Nenhum resultado encontrado.";
            noResultsMessage.classList.add("no-results-message", "text-center", "flex", "w-screen", "pl-12", "justify-center", "items-center", "text-gray-500");
            seriesContainer.appendChild(noResultsMessage);
        } else {
            searchResults.forEach(series => {
                seriesContainer.appendChild(series.parentNode);
            });
        }
    }

    function handleSearch() {
        const query = searchInput.value.trim();
        const generoSelecionado = generoDropdown.value.toLowerCase();
        selectedGenre = generoSelecionado;

        if (query !== "") {
            filterseries(query);
            changePage(1);
            hidePageButtons();
        } else {
            filterseriesByGenero(generoSelecionado);
            changePage(1);
            hidePageButtons();
        }

        if (window.innerWidth > 992) {
            searchInput.focus();
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

    generoDropdown.addEventListener("change", function () { 
        handleSearch();
        updateGenreSearchText();
    });

    function updateGenreSearchText() {
        const selectedGenreOption = generoDropdown.options[generoDropdown.selectedIndex].text;
        if (selectedGenreOption.toLowerCase() === "todos") {
            searchInput.placeholder = "Buscar séries";
        } else {
            selectedGenreText = selectedGenreOption;
            searchInput.placeholder = "Buscar séries de " + selectedGenreText;
        }
    }

    updateGenreSearchText();
    if (window.innerWidth > 992) {
        searchInput.focus();
    }
});
