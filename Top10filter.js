document.addEventListener("DOMContentLoaded", function () {
    const tipoSelecao = document.getElementById('tipoSelecao');
    const filmes = document.querySelectorAll('.filme');
    const series = document.querySelectorAll('.serie');

    // Função para alternar a visibilidade das imagens
    function toggleVisibilidade(elementos, mostrar) {
        elementos.forEach(elemento => {
            elemento.classList.toggle('hidden', !mostrar);
        });
    }

    // Adiciona um ouvinte de eventos de mudança ao select
    tipoSelecao.addEventListener('change', function () {
        // Verifica qual opção foi selecionada
        const mostrarFilmes = tipoSelecao.value === '1';

        // Mostra ou esconde as imagens com base na opção selecionada
        toggleVisibilidade(filmes, mostrarFilmes);
        toggleVisibilidade(series, !mostrarFilmes);
    });
});