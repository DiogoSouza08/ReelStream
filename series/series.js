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

    // Adiciona a rolagem para o topo
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

// Barra de pesquisa
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchIcon = document.getElementById("searchIcon");
    const seriesContainer = document.getElementById("seriesContainer");
    const seriesPages = document.querySelectorAll("[class^='page-']");
    

    let originalseries = [];
    let searchResults = [];

    function getOriginalseries() {
        originalseries = Array.from(document.querySelectorAll(".page-1 img, .page-2 img, .page-3 img, .page-4 img"));
    }

    getOriginalseries();

    function restoreOriginalseries() {
        seriesContainer.innerHTML = "";
        originalseries.forEach(movie => {
            seriesContainer.appendChild(movie.parentNode);
        });
    }

    function filterseries(query) {
        const lowerCaseQuery = query.toLowerCase();
        searchResults = originalseries.filter(movie => {
            const movieName = movie.alt.toLowerCase();
            return movieName.includes(lowerCaseQuery);
        });
        displaySearchResults();
    }

    function displaySearchResults() {
        seriesContainer.innerHTML = "";
        if (searchResults.length === 0) {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.textContent = "Nenhum resultado encontrado.";
            noResultsMessage.classList.add("no-results-message", "text-center", "flex","w-screen","pl-12","justify-center","items-center","text-gray-500"); 
            seriesContainer.appendChild(noResultsMessage);
        } else {
            searchResults.forEach(movie => {
                seriesContainer.appendChild(movie.parentNode);
            });
        }
    }

    

    function handleSearch() {
        const query = searchInput.value.trim();
        if (query !== "") {
            filterseries(query);
            changePage(1);
            hidePageButtons(); 
        } else {
            restoreOriginalseries();
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
});
