// model -> TodoModel

const connection = require('../database/connection');
const { update, setMaxListeners } = require('../database/connection');


// exporta os módulos que vamos criar
module.exports = {


    // index: retorna todos os elementos
    // create -> insert
    // show -> apresenta um unico elemento
    // update -> atualizar registro
    // delete/destroy

    async index(request, response) {

        // const todos = await connection('todos').select('*');

        const todos = await connection('todos')
            .join('marcadores', 'marcadores.name', '=', 'todos.marcador_name')
            .select([
                'todos.*',
                'marcadores.cor'

            ]);

        return response.json(todos);
    },

    async create(request, response) {

        const { name, priority, marcador_name } = request.body;

        // const marcador_id = await connection('marcadores')
        //     .where('name', marcador)
        //     .select('marcadores.id')
        //     .first();

        const [id] = await connection('todos')
            .insert({
                name,
                priority,
                marcador_name
            });

        return response.json({ id });

    },

    async delete(request, response) {

        const { id } = request.params;
        // retorna apenas um unico recurso

        await connection('todos')
            .where('id', id)
            .delete();

        response.status(204).send();
        // 204: ocorreu tudo certo




    },

    // async update(request, response) {


    //     const { name, priority, marcador_name } = request.body;
    //     const { id } = request.params;

    //     console.log(id);

    //     await connection('todos')
    //         .update('todos')
    //         .set('name =', name,
    //             'priority =', priority,
    //             'marcador_name =', marcador_name)
    //         .where('id', id);

    //     return response.status(204).send();
    // }


}