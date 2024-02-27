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
    var kidsPages = document.querySelectorAll('[class^="page-"]');
    kidsPages.forEach(function(page) {
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
    const kidsContainer = document.getElementById("kidsContainer");
    const generoDropdown = document.getElementById("generoDropdown");

    let originalkids = [];
    let searchResults = [];

    function getOriginalkids() {
        originalkids = Array.from(document.querySelectorAll(".page-1 img, .page-2 img, .page-3 img, .page-4 img"));
    }

    getOriginalkids();

    function restoreOriginalkids() {
        kidsContainer.innerHTML = "";
        originalkids.forEach(kids => {
            const kidsPage = kids.closest('.kids-page');
            const pageNumber = kidsPage.dataset.page;
            if (pageNumber === currentPage) {
                kidsContainer.appendChild(kids.parentNode);
            }
        });
    }

    function filterkids(query) {
        const lowerCaseQuery = query.toLowerCase();
        searchResults = originalkids.filter(kids => {
            const kidsName = kids.alt.toLowerCase();
            const kidsGenre = kids.alt.toLowerCase().split('-')[0].trim();
            return kidsName.includes(lowerCaseQuery) && (selectedGenre === "todos" || kidsGenre === selectedGenre);
        });
        displaySearchResults();
    }

    function filterkidsByGenero(genero) {
        if (genero === "todos") {
            location.reload();
            return;
        }
        searchResults = originalkids.filter(kids => {
            const kidsGenero = kids.alt.toLowerCase().split('-')[0].trim();
            return kidsGenero === genero;
        });
        displaySearchResults();
    }

    function displaySearchResults() {
        kidsContainer.innerHTML = "";
        if (searchResults.length === 0) {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.textContent = "Nenhum resultado encontrado.";
            noResultsMessage.classList.add("no-results-message", "text-center", "flex", "w-screen", "pl-12", "justify-center", "items-center", "text-gray-500");
            kidsContainer.appendChild(noResultsMessage);
        } else {
            searchResults.forEach(kids => {
                kidsContainer.appendChild(kids.parentNode);
            });
        }
    }

    function handleSearch() {
        const query = searchInput.value.trim();
        const generoSelecionado = generoDropdown.value.toLowerCase();
        selectedGenre = generoSelecionado;

        if (query !== "") {
            filterkids(query);
            changePage(1);
            hidePageButtons();
        } else {
            filterkidsByGenero(generoSelecionado);
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

 

    updateGenreSearchText();
    if (window.innerWidth > 992) {
        searchInput.focus();
    }
});
