const express = require('express');

const app = express();

app.get('/', (request,responce) =>{
    return responce.json({
        evento: 'Semana OmniStack',
        aluno: 'Davi Martins'
    });
});

app.listen(3333); 