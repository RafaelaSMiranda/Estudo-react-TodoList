const express = require('express');
const routes = express.Router();

const TodoController = require('./controllers/TodoController');
const MarcadorController = require('./controllers/MarcadorController');

routes.get('/', (request, response) => {

    // request: recuperar informação pela url ou post (pelo corpo da mensagem)

    return response.send('Olá, mundo! Bem vindo!');

});


routes.get('/marcadores', MarcadorController.index);
routes.post('/marcadores', MarcadorController.create);
routes.delete('/marcadores/:name', MarcadorController.delete);


routes.get('/todos', TodoController.index);
routes.get('/todos/:id', TodoController.show);
routes.get('/todos/complete/:id', TodoController.complete);
routes.get('/todos/cancel/:id', TodoController.cancel);
routes.post('/todos', TodoController.create);
routes.delete('/todos/:id', TodoController.delete);
routes.put('/todos/:id', TodoController.update);
routes.get('/listPriority/:value', TodoController.indexPriority);


routes.get('/listName', TodoController.indexName);
routes.get('/listMarcador', TodoController.indexMarcador);


// metodos diferentes
// post (recebe valores)
// get (exibe)
// put/patch
// delete
// qualquer nome de variável

module.exports = routes;
// não esquecer