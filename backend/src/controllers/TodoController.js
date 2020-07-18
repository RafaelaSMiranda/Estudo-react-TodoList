// model -> TodoModel

const connection = require('../database/connection');


// exporta os módulos que vamos criar
module.exports = {


    // index: retorna todos os elementos
    // create -> insert
    // show -> apresenta um unico elemento
    // update -> atualizar registro
    // delete/destroy

    async index(request, response) {


        // promise (assincrono)
        const todos = await connection('todos')
            .select('*');

        return response.json(todos);
    },

    async create(request, response) {

        const { name, priority } = request.body;

        console.log({name, priority});

        const [id] = await connection('todos')
            .insert({
                name,
                priority
            });

            return response.json({id});

    }


}