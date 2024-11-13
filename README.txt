Feito por:

Vicotor Tedesco, Gustavo de Oliveira e Laís Caravalho

# API de Cardápio em Node.js

Este projeto implementa uma API de um cardápio de restaurante utilizando Node.js. Ele fornece funcionalidades como login, exibição do cardápio com informações de pratos (como nome, imagens e porções), além de gráficos gerados com Chart.js. 


## Tecnologias Utilizadas

- Node.js: Ambiente de execução para JavaScript.
- Chart.js: Biblioteca para criação de gráficos dinâmicos.
- JSON: Formato para armazenar os dados do cardápio.
- Express: Framework para a criação do API.

## Funcionalidades

1. Login: Página simples de login onde a verificação é feita com uma estrutura de `if` e `else`.
2. Exibição do Cardápio: A home do cardápio mostra os pratos puxando informações (nome, imagens, porções) de um banco de dados em JSON.
3. Gráficos: Uso de gráficos interativos para mostrar a distribuição dos pratos ou outros dados do cardápio usando o Chart.js.
4. Tratamento de erro por fetch e catch na exibição da API
5. Redirecionamento por funções.
6. Tratamento de filtragem via manipulação do diretório da API.

---

## Pré-requisitos

Antes de rodar a API localmente, você precisa ter as seguintes ferramentas instaladas:

- Node.js (recomendado versão 16 ou superior)
- npm (gerenciador de pacotes do Node.js)

Se não estiverem instalados, baixe e instale a partir do site oficial: [https://nodejs.org/](https://nodejs.org/).

---

Claro, aqui está uma versão aprimorada e mais clara dessa seção do README:

---

## Como Instalar e Executar Localmente

### 1. Inicialize um novo projeto Node.js

Para começar, crie um novo projeto Node.js e gere automaticamente o arquivo `package.json`. No terminal, navegue até o diretório onde deseja criar o projeto e execute o seguinte comando:

```bash
npm init -y
```

O parâmetro `-y` irá gerar o arquivo `package.json` com as configurações padrão. Esse arquivo é essencial para gerenciar as dependências e configurações do seu projeto.

### 2. Instale o Express

O Express é um framework para Node.js que facilita a criação de servidores e APIs. Para instalá-lo, execute o seguinte comando:

```bash
npm install express
```

Isso irá adicionar o Express às dependências do seu projeto e permitir que você crie o servidor HTTP/HTTPS para sua API.

### 3. Instale o CORS

O CORS (Cross-Origin Resource Sharing) é um mecanismo que permite que recursos de um servidor sejam acessados por páginas de outros domínios de maneira controlada. Para habilitar o CORS em seu servidor, instale o pacote `cors` com o comando:

```bash
npm install cors
```

Isso permitirá que você configure o seu servidor para aceitar requisições de diferentes origens (domínios), o que é especialmente útil em aplicações frontend e backend que rodam em diferentes domínios ou portas durante o desenvolvimento.

---

Agora, com o Express e o CORS instalados, você está pronto para configurar e executar o seu servidor localmente.

---

Essa versão está mais detalhada e clara, explicando não apenas o comando a ser executado, mas também o propósito de cada etapa e como isso contribui para o funcionamento do seu projeto.


## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
/cardapio-api
│
├── /public          # Arquivos públicos (HTML, CSS, JS)
├── /routes          # Rotas da API
│   ├── login.js     # Rota de login
│   ├── menu.js      # Rota para acessar os dados do cardápio
├── /data            # Arquivo de dados JSON (menu.json)
├── /views           # Templates HTML (se necessário)
├── server.js        # Arquivo principal do servidor
├── package.json     # Dependências e scripts
└── README.md        # Este arquivo
```

### 1. Login (login.js)

A verificação de login é feita com uma lógica simples utilizando `if` e `else`. Ao acessar a rota `/login`, será possível fazer a autenticação com um usuário e senha fixos definidos diretamente no código.

### 2. Home

Retorna os dados do cardápio em formato JSON. A informação dos pratos (nome, imagem e porção...) é carregada de um arquivo `catalogo.json`.

### 3. Gráficos com Chart.js

Na página principal (`index.html`), gráficos dinâmicos podem ser gerados utilizando a biblioteca Chart.js para visualizar a distribuição de pratos, porções ou qualquer outro dado relevante do cardápio.

Exemplo básico de gráfico utilizando Chart.js:

```html
<canvas id="myChart" width="400" height="200"></canvas>
<script>
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Prato 1', 'Prato 2'],
      datasets: [{
        label: 'Porções',
        data: [12, 19],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1
      }]
    }
  });
</script>
```