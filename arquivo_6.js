    let produtosData = [];

    // Carrega o JSON inicial ao abrir a página
    async function carregarProdutos() {
      try {
        const response = await fetch('produtos.json');
        produtosData = await response.json();
        renderizarCards();
      } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
      }
    }

    // Renderiza os cards de produtos na tela
    function renderizarCards() {
      const container = document.getElementById('gridProdutos');
      container.innerHTML = '';

      produtosData.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';

      card.innerHTML = `
        <img src="${produto.foto || produto.imagem}" alt="Foto do(a) ${produto.nome}">
        <div class="card-body">
          <span class="badge-unidade">${produto.unidade || ''}</span>
          <h3 class="card-title">${produto.nome}</h3>

          ${produto.descricao ? `
            <div class="card-info">
              <strong>Descrição:</strong> ${produto.descricao}
            </div>
          ` : ''}

          ${produto.precoCompra !== undefined ? `
            <div class="card-info">
            <strong>Preço de Compra:</strong> R$ ${Number(produto.precoCompra).toFixed(2)}
            </div>
          ` : ''}

          ${produto.precoVenda !== undefined ? `
            <div class="card-info">
              <strong>Preço de Venda:</strong> R$ ${Number(produto.precoVenda).toFixed(2)}
            </div>
          ` : ''}

          <div class="card-info">
            <strong>Estoque Atual:</strong> ${produto.quantidadeEstoque ?? produto.quantidade}
          </div>

          <div class="card-control">
            <label for="mov-${produto.id}">Entrada / Saída (negativo):</label>
            <input type="number" id="mov-${produto.id}" value="0" step="1" placeholder="Ex: 5 ou -3">
          </div>
        </div>
      `;

        container.appendChild(card);
      });
    }

    // Controles do Modal
    function abrirModal() {
      document.getElementById('modalOverlay').style.display = 'flex';
    }

    function fecharModal() {
      document.getElementById('modalOverlay').style.display = 'none';
      document.getElementById('formProdutos').reset();
    }

    // Adiciona o novo produto ao estado local e re-renderiza
    function adicionarProduto(event) {
      event.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const quantidade = parseInt(document.getElementById('quantidade').value, 10);
      const imagem = document.getElementById('imagem').value.trim();
      const descricao = document.getElementById('descricao').value.trim();

      const novoProduto = {
        id: Date.now(),
        nome,
        quantidadeEstoque: quantidade,
        foto: imagem,
        descricao
      };

      produtosData.push(novoProduto);
      renderizarCards();
      fecharModal();
    }

    // Exporta o JSON atualizado fazendo o download do arquivo
    function salvarInformacoes() {

      produtosData.forEach(produto => {
        const campo = document.getElementById(`mov-${produto.id}`);
        if (campo) {
          const movimento = parseInt(campo.value, 10) || 0;
          const estoqueAtual = produto.quantidadeEstoque ?? produto.quantidade ?? 0;
          produto.quantidadeEstoque = estoqueAtual + movimento;
          campo.value = 0;
        }
      });

      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(produtosData, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "produtos_atualizado.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      renderizarCards();
      alert('Arquivo JSON atualizado e baixado com sucesso!');
    }

    // Inicialização
    document.addEventListener('DOMContentLoaded', carregarProdutos);