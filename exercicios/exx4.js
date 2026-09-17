<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Painel de Produtos</title>
  <style>
    body { font-family: sans-serif; max-width: 400px; margin: 40px auto; }
    input { padding: 8px; width: 55%; margin-bottom: 5px; }
    button { padding: 6px 10px; }
    li { margin: 8px 0; }
    li button { margin-left: 10px; }
  </style>
</head>
<body>

  <h2>Cadastro de Produtos</h2>
  <input type="text" id="inputNome" placeholder="Nome do Produto"><br>
  <input type="number" id="inputPreco" placeholder="Preço (R$)"><br>
  <button onclick="cadastrarProduto()">Cadastrar Produto</button>

  <ul id="listaProdutos"></ul>

  <script>
    function cadastrarProduto() {
      // pega os valores digitados
      let nome = document.getElementById('inputNome').value;
      let preco = document.getElementById('inputPreco').value;

      // cria o item da lista
      let item = document.createElement('li');
      item.textContent = nome + " - R$ " + parseFloat(preco).toFixed(2);

      // cria o botao de excluir
      let botaoExcluir = document.createElement('button');
      botaoExcluir.textContent = "Excluir";

      // quando clicar, remove o li pai da tela
      botaoExcluir.onclick = function () {
        item.remove();
      };

      // junta o botao dentro do item
      item.appendChild(botaoExcluir);

      // coloca o item na lista
      document.getElementById('listaProdutos').appendChild(item);

      // limpa os campos
      document.getElementById('inputNome').value = "";
      document.getElementById('inputPreco').value = "";
    }
  </script>

</body>
</html>
