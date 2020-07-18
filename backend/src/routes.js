const express = require('express');
const routes = express.Router();

const TodoController = require('./controllers/TodoController')

routes.get('/', (request, response) => {

    // request: recuperar informação pela url ou post (pelo corpo da mensagem)

    return response.send('Olá, mundo! Bem vindo!');

});


routes.get('/todos', TodoController.index);
routes.post('/todos', TodoController.create);

// metodos diferentes
// post (recebe valores)
// get (exibe)
// put/patch
// delete
// qualquer nome de variável

module.exports = routes;
// não esquecer