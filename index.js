// Importação dos módulos necessários
const express= require('express');
const cors=require('cors'); // Pacote CORS para lidar com solicitações de diferentes origens
const catalogo=require('./catalogo.json'); // Importação dos dados do catálogo
const path=require('path');

// Criação da instância do express
const app=express();

// Definição da porta que o servidor irá ouvir
const PORT=8080;

// Configuração do middleware CORS para permitir solicitações de diferentes origens
app.use(cors()); // Essa linha adiciona o middleware CORS ao aplicativo Express

// Definição do middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Definição da rota para o catálogo
app.get('/catalogo-visual', (req, res)=>{
    res.json(catalogo); // Retorna os dados do catálogo como uma resposta json
});

// Definição de filtro do json pela rota

app.get('/home', (req, res)=>{ 
    res.sendFile(__dirname + "/views/home.html"); 
});

app.get('/catalogo-visual/entradas', (req, res)=>{ 

    const entradas = catalogo.filter((prato) => prato.tipo === "entrada");
    res.json(entradas); 
});

app.get('/catalogo-visual/prato-principal', (req, res)=>{ 

    const pratoPrincipal = catalogo.filter((prato) => prato.tipo === "prato-principal");
    res.json(pratoPrincipal); 
});

app.get('/catalogo-visual/sobremesa', (req, res)=>{ 

    const sobremesa = catalogo.filter((prato) => prato.tipo === "sobremesa");
    res.json(sobremesa); 
});

//------------------------------------------

app.get('/dashboards', (req, res)=>{ 
    res.sendFile(__dirname + "/views/dashboards.html"); 
});

app.get('/contato', (req, res)=>{
    res.sendFile(__dirname + "/views/contato.html"); 
});

app.get('/saibamais', (req, res)=>{
    res.sendFile(__dirname + "/views/saibamais.html"); 
});


// Inicialização do servidor Express
app.listen(PORT, () =>{
    console.log(`Servidor em execução em http://localhost:${PORT}`);
});