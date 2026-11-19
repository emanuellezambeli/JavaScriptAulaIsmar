const siglas = ["AL", "BA", "CE", "PE"];
const capitais = ["Maceio", "Salvador", "Fortaleza", "Recife"];
const areas = [
  "43.750,423 km²",
  "586.521,121 km²",
  "46.074,447 km²",
  "248.219,481 km²",
];
const populacoes = [
  "3.833.712 hab.",
  "20.538.718 hab.",
  "16.054.524 hab.",
  "44.411.238 hab.",
];
const bandeiras = [
  "https://upload.wikimedia.org/wikipedia/commons/8/88/Bandeira_de_Alagoas.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Cear%C3%A1.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/59/Bandeira_de_Pernambuco.svg",
];

// Mapeamento dos elementos da DOM
const selectEstados = document.getElementById("selectEstados");
const btnDetalhes = document.getElementById("btnDetalhes");
const divCapital = document.getElementById("divCapital");
const divArea = document.getElementById("divArea");
const divPopulacao = document.getElementById("divPopulacao");
const divBandeira = document.getElementById("divBandeira");

// EventListener para o evento onclick do botão
btnDetalhes.addEventListener("click", function () {
  // Pega o índice selecionado na listbox (0 a 3)
  const index = selectEstados.value;

  // Se houver seleção válida
  if (index !== "") {
    // Preenche as divs usando o mesmo índice nos arrays paralelos
    divCapital.textContent = capitais[index];
    divArea.textContent = areas[index];
    divPopulacao.textContent = populacoes[index];

    // Exibe a imagem da bandeira no quarto quadro
    divBandeira.innerHTML = `<img src="${bandeiras[index]}" alt="Bandeira de ${siglas[index]}">`;
  }
});
