// Função que cria a mensagem de saudação
function construirSaudacao(nome) {
    return "Olá, " + nome + "! Seja bem-vindo ao curso de Web!";
}

// Função chamada quando o botão for clicado
function saudar() {
    // Pega o nome que foi digitado
    let nome = document.getElementById("campoNome").value;

    // Cria a saudação
    let mensagem = construirSaudacao(nome);

    // Mostra a mensagem na tela
    document.getElementById("mensagem").innerText = mensagem;
}
