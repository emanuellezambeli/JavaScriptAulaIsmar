<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Lista de Tarefas</title>
  <style>
    body { font-family: sans-serif; max-width: 400px; margin: 40px auto; }
    input { padding: 8px; width: 60%; }
    button { padding: 8px; }
    li { margin: 5px 0; }
  </style>
</head>
<body>

  <h2>Minhas Tarefas</h2>
  <input type="text" id="inputTarefa" placeholder="Digite a tarefa">
  <button onclick="adicionarTarefa()">Adicionar Tarefa</button>

  <ul id="minhasTarefas"></ul>

  <script>
    // array global que guarda as tarefas
    let listaDeTarefas = [];

    function adicionarTarefa() {
      // pega o texto do input
      let campo = document.getElementById('inputTarefa');
      let texto = campo.value;

      // joga no array
      listaDeTarefas.push(texto);

      // limpa o campo
      campo.value = "";

      // atualiza a lista na tela
      atualizarLista();
    }

    function atualizarLista() {
      // limpa a lista antes de redesenhar
      document.getElementById('minhasTarefas').innerHTML = "";

      // percorre o array e cria um <li> pra cada tarefa
      for (let i = 0; i < listaDeTarefas.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaDeTarefas[i];
        document.getElementById('minhasTarefas').appendChild(item);
      }
    }
  </script>

</body>
</html>
