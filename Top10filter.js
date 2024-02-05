//Filtro de seleção(filmes e series)
document.addEventListener("DOMContentLoaded", function () {
    const tipoSelecao = document.getElementById('tipoSelecao');
    const filmes = document.querySelectorAll('.filme');
    const series = document.querySelectorAll('.serie');


    function toggleVisibilidade(elementos, mostrar) {
        elementos.forEach(elemento => {
            elemento.classList.toggle('hidden', !mostrar);
        });
    }


    tipoSelecao.addEventListener('change', function () {

        const mostrarFilmes = tipoSelecao.value === '1';


        toggleVisibilidade(filmes, mostrarFilmes);
        toggleVisibilidade(series, !mostrarFilmes);
    });
});

//controle de carossel desktop
document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const carousel = document.getElementById('carousel');

    prevButton.addEventListener('click', function () {
        carousel.scrollLeft -= 300; // Quantidade a rolar para a esquerda
    });

    nextButton.addEventListener('click', function () {
        carousel.scrollLeft += 300; // Quantidade a rolar para a direita
    });
});
