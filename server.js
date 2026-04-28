const express = require('express');
const path = require('path');
const app = express();

// Porta definida como 80 conforme o requisito
const PORT = 80;

// Configura o Express para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Inicia o servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse localmente em: http://localhost`);
    console.log(`Acesse na rede pelo seu IP.`);
});