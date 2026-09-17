<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Busca de Tecnologias</title>
  <style>
    body { font-family: sans-serif; max-width: 400px; margin: 40px auto; }
    input { padding: 8px; width: 90%; margin-bottom: 15px; }
    li { margin: 5px 0; }
  </style>
</head>
<body>

  <h2>Tecnologias</h2>
  <input type="text" id="campoBusca" placeholder="Buscar tecnologia..." oninput="filtrarLista()">

  <ul id="listaTecnologias">
    <li>JavaScript</li>
    <li>Python</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>PHP</li>
    <li>Java</li>
  </ul>

  <script>
    function filtrarLista() {
      // pega o texto digitado e deixa tudo minusculo
      let termo = document.getElementById('campoBusca').value.toLowerCase();

      // pega todos os itens da lista
      let itens = document.querySelectorAll('#listaTecnologias li');

      // percorre cada item e verifica se bate com a busca
      for (let i = 0; i < itens.length; i++) {
        let texto = itens[i].textContent.toLowerCase();

        if (texto.includes(termo)) {
          itens[i].style.display = "block";
        } else {
          itens[i].style.display = "none";
        }
      }
    }
  </script>

</body>
</html>
