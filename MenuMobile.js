document.addEventListener("DOMContentLoaded", function () {
    const openMenuButton = document.getElementById('OpenMenu');
    const closeMenuButton = document.getElementById('CloseMenu');
    const menuContainer = document.getElementById('Menu');

    openMenuButton.addEventListener('click', function () {
        menuContainer.classList.remove('-translate-x-full');
    });

    closeMenuButton.addEventListener('click', function () {
        menuContainer.classList.add('-translate-x-full');
    });
});




