
exports.up = function(knex) {
  
    return knex.schema.createTable('todos', function(table) {

        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('priority').notNullable().defaultTo(0);
        table.boolean('completed').notNullable().defaultTo(false);
        table.string('marcador_name').notNullable().defaultTo('Tarefa');
        // precisa da combinação dos dois, notNullable e defaultTo

        table.foreign('marcador_name').references('name').inTable('marcadores');

    });
};

exports.down = function(knex) {

    return knex.schema.dropTable('todos');
    // exclui toda a tabela
  
};
