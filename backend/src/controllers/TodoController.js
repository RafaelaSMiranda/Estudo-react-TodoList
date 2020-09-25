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
            })

        return response.json({ id });

    },

    async delete(request, response) {

        const id = request.params.id;

        console.log(id);
        // retorna apenas um unico recurso

        await connection('todos')
            .where('id', '=', id)
            .delete();

        response.status(204).send();
        // 204: ocorreu tudo certo
    },

    async show(request, response) {

        const id = request.params.id;

        const todo = await connection('todos')
            .where('id', '=', id)
            .select('*')
            .first();

        return response.json(todo);

    },

    async indexPriority(request, response) {

        const priority = request.params.value;


        const todo = await connection('todos')
            .where('priority', '=', priority)
            .select('*')

        return response.json(todo);


    },

    async indexName(request, response) {


        const filter = request.query.name;

        const todo = await connection('todos')
            .where('name', 'like', `%${filter}%`)
            .select('*')

        return response.json(todo);
    },

    async indexMarcador(request, response) {

        const filter = request.query.marcador_name;

        console.log(filter);
        
        const todo = await connection('todos')
            .where('marcador_name', '=', filter)
            .select('*')

        return response.json(todo);
    },


    async update(request, response) {


        const { name, priority, marcador_name, completed } = request.body;
        const id = request.params.id;

        console.log(id);

        await connection('todos')
            .where('id', '=', id)
            .update({
                'name': name,
                'priority': priority,
                'marcador_name': marcador_name,
                'completed': completed

            }).then(() => {
                return response.json({ id, name });
            }).catch((error) => {
                return response
                    .status(400)
                    .send({ 'menssage': 'Update error', error });
            });

        // return response.status(204).send();
    },

    async complete(request, response) {

        const id = request.params.id;


        await connection('todos')
            .where('id', '=', id)
            .update({
                'completed': 1
            }).then(() => {
                return response.json({ id });
            }).catch((error) => {
                return response.status(400)
                    .send({ 'menssage': 'Complete error', error });
            });
    },

    async cancel(request, response) {
        const id = request.params.id;

        await connection('todos')
            .where('id', '=', id)
            .update({
                'completed': 0
            }).then(() => {
                return response.json({ id });
            }).catch((error) => {
                return response.status(400)
                    .send({ 'menssage': 'Complete error', error });
            });
    }

}