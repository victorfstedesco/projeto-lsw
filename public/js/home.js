function gerarHtml (data) {
  const catalogoList = document.getElementById('produtos-container'); // Obtendo a div onde os produtos serão exibidos
  data.forEach(catalogo => { // Iterando sobre os itens do catálogo recebidos
    const cardDiv = document.createElement('div'); // Criando o elemento div para o card
      cardDiv.classList.add('card'); // Adicionando a classe 'card' para estilização
      cardDiv.innerHTML = `
        <div class="sobre">
          <h4>${catalogo.titulo}</h4>
          <p>${catalogo.descricao}</p>
          <h4><i>${catalogo.preco}</i></h4>
          <div class="rodape">
            <h6>${catalogo.tipo}</h6>
            <div class="tamanho">
              <img src="../assets/pessoa.svg" alt="">
              <p>${catalogo.serve}</p>
            </div>
          </div>
        </div>
        <div>
          <img class="produto-img" src="${catalogo.imagem}" alt="${catalogo.titulo}">
        </div>
      `;
      catalogoList.appendChild(cardDiv); // Adicionando o card à lista de produtos
    });
  }

fetch('http://localhost:8080/catalogo-visual') // Função para buscar e exibir os dados do catálogo
  .then(response => response.json()) // Convertendo a resposta para JSON
  .then(data => { // Manipulando os dados recebidos
    gerarHtml(data)
  })
  .catch(error => console.error('Erro ao carregar os itens do catálogo:', error)); // Tratamento de erros

  //FILTROS ------------------------------------------

function getEntradas() {

  const catalogoList = document.getElementById('produtos-container');

  catalogoList.innerHTML = "";

  fetch('http://localhost:8080/catalogo-visual/entradas') // Função para buscar e exibir os dados do catálogo
  .then(response => response.json()) // Convertendo a resposta para JSON
  .then(data => { // Manipulando os dados recebidos
    gerarHtml(data)
  })
  .catch(error => console.error('Erro ao carregar os itens do catálogo:', error)); // Tratamento de erros
}

function getPratoprincipal() {

  const catalogoList = document.getElementById('produtos-container');

  catalogoList.innerHTML = "";

  fetch('http://localhost:8080/catalogo-visual/prato-principal') // Função para buscar e exibir os dados do catálogo
  .then(response => response.json()) // Convertendo a resposta para JSON
  .then(data => { // Manipulando os dados recebidos
    gerarHtml(data)
  })
  .catch(error => console.error('Erro ao carregar os itens do catálogo:', error)); // Tratamento de erros
}

function sobremesa() {
  const catalogoList = document.getElementById('produtos-container');

  catalogoList.innerHTML = "";

  fetch('http://localhost:8080/catalogo-visual/sobremesa') // Função para buscar e exibir os dados do catálogo
  .then(response => response.json()) // Convertendo a resposta para JSON
  .then(data => { // Manipulando os dados recebidos
    gerarHtml(data)
  })
  .catch(error => console.error('Erro ao carregar os itens do catálogo:', error)); // Tratamento de erros
}