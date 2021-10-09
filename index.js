const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['Fullstack master', 'Desenvovlvimento de Games', 'Viver de Youtube'];

// GET - um curso
server.get('/cursos/:index', //endpoint
(req, res) => {
    const { index } = req.params; // pegará o parametro do endpoint para a constante index

    return res.json(cursos[index]); // retorna o curso na posição passada no endpoint
})

// GET - todos os cursos
server.get('/cursos', //endpoint
(req, res) => {
    return res.json(cursos); // retorna todos os cursos
})


//POST - criar novo curso
server.post('/cursos', //endpoint
(req, res) => { 
    const { name } = req.body; // pegará o name passado no body

    cursos.push(name); // adicionará o name na lista cursos

    return res.json(cursos); // retorna todos os cursos
})

//PUT - editar  curso
server.put('/cursos/:index', //endpoint
(req, res) => { 
    const { index } = req.params;// pegará o index no endpoint
    const { name } = req.body; // pegará o name no body

    cursos[index] = name; // editará o curso 

    return res.json(cursos); // retorna todos os cursos
})

//DELETE - remover curso
server.delete('/cursos/:index', //endpoint
(req, res) => { 
    const { index } = req.params;// pegará o name passado no endpoint

    cursos.splice(index, 1)

    return res.json({mensagem : 'O curso foi deletado !'}); // retorna uma mensagem
})









server.listen(3000);