const connection = require('../database/connection');

module.exports = {

    async index(request, response) {

        const marcadores = await connection('marcadores').select('*');

        response.json(marcadores);

    },

    async create(request, response) {


        const { name, cor } = request.body;
        // as informações para inserção são enviadas no corpo da mensagem

        const [id] = await connection('marcadores').insert({

            name,
            cor

        });

        return response.json({ id });

    },

    async delete(request, response) {


        const { name } = request.params;

        await connection('marcadores')
            .where('name', name)
            .delete();

        return response.status(204).send();


    }




}