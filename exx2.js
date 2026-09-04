// Função que calcula a média
function calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}

// Função chamada quando clicar no botão
function calcular() {
    // Pega os valores dos campos e transforma em número
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);

    // Calcula a média
    let media = calcularMedia(nota1, nota2);

    // Pega o lugar onde vamos mostrar o resultado
    let resultado = document.getElementById("resultadoCalculo");

    // Verifica se o aluno foi aprovado
    if (media >= 7) {
        resultado.innerText = "Média: " + media + " - Aprovado";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "Média: " + media + " - Recuperação";
        resultado.style.color = "red";
    }
}