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
    const KidsContainer = document.getElementById("KidsContainer");
    const KidsPages = document.querySelectorAll("[class^='page-']");
    

    let originalKids = [];
    let searchResults = [];

    function getOriginalKids() {
        originalKids = Array.from(document.querySelectorAll(".page-1 img, .page-2 img, .page-3 img, .page-4 img"));
    }

    getOriginalKids();

    function restoreOriginalKids() {
        KidsContainer.innerHTML = "";
        originalKids.forEach(movie => {
            KidsContainer.appendChild(movie.parentNode);
        });
    }

    function filterKids(query) {
        const lowerCaseQuery = query.toLowerCase();
        searchResults = originalKids.filter(movie => {
            const movieName = movie.alt.toLowerCase();
            return movieName.includes(lowerCaseQuery);
        });
        displaySearchResults();
    }

    function displaySearchResults() {
        KidsContainer.innerHTML = "";
        if (searchResults.length === 0) {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.textContent = "Nenhum resultado encontrado.";
            noResultsMessage.classList.add("no-results-message", "text-center", "flex","w-screen","pl-12","justify-center","items-center","text-gray-500"); 
            KidsContainer.appendChild(noResultsMessage);
        } else {
            searchResults.forEach(movie => {
                KidsContainer.appendChild(movie.parentNode);
            });
        }
    }

    

    function handleSearch() {
        const query = searchInput.value.trim();
        if (query !== "") {
            filterKids(query);
            changePage(1);
            hidePageButtons(); 
        } else {
            restoreOriginalKids();
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
