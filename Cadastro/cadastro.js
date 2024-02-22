document.addEventListener("DOMContentLoaded", function() {
    const escolherPlanoButtons = document.querySelectorAll(".escolher-plano");
    const planosSection = document.getElementById("planos");
    const cadastroSection = document.getElementById("cadastro");

    escolherPlanoButtons.forEach(button => {
        button.addEventListener("click", function() {
            planosSection.classList.add("hidden");
            cadastroSection.classList.remove("hidden");
        });
    });
});
