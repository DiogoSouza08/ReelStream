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
        // Verifica qual opção foi selecionada
        const mostrarFilmes = tipoSelecao.value === '1';


        toggleVisibilidade(filmes, mostrarFilmes);
        toggleVisibilidade(series, !mostrarFilmes);
    });
});
