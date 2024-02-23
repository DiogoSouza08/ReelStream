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


document.getElementById("criar-conta").addEventListener("click", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert("Por favor, preencha todos os campos antes de prosseguir.");
    } else if (password.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
    } else if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
    } else {
        window.location.href = "../Pagamento/pagamento.html";
    }
});

