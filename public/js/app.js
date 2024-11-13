fetch('http://localhost:8080/catalogo-visual') // Função para buscar e exibir os dados do catálogo
.then(response => response.json()) // Convertendo a resposta para JSON
.then(data => { // Manipulando os dados recebidos
    const catalogoList = document.getElementById('catalogo-list'); // Obtendo a div onde os filmes serão exibidos
    data.forEach(catalogo => { // Iterando sobre os alimentos recebidos
        const alimentoDiv = document.createElement('div'); // Criando um elemento div para cada alimento
        alimentoDiv.innerHTML = `
        <img src="${catalogo.imagem}" alt="${catalogo.titulo}">
        <h2>${catalogo.titulo}</h2>
        <h3>${catalogo.descricao}</h3>
        <h3>${catalogo.preco}</h3>
        <h4>${catalogo.serve}</h4>
        `;
        catalogoList.appendChild(alimentoDiv); // Adicionando o elemento do catalogo à div de alimento
    });
})
.catch(error => console.error('Erro ao carregar os alimentos:', error)); // Tratamento de erros