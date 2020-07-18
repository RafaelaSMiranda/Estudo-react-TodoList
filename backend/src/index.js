// express js
const express = require('express');

// routes -> REST
// GET
// POST
// PUT/PATCH
// DELETE

const connection = require('./database/connection');

connection('todos');

const app = express();
const routes = require('./routes');

// request query
// www.site.com/?codigo=10

// request param
// www.site.com/produto/10


app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('TODO server started.')
});