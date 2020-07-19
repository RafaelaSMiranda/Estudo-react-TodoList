
exports.up = function(knex) {

    return knex.schema.createTable('marcadores', function(table){

        table.string('name').notNullable().primary();
        // não posso ter marcadores de mesmo nome
        table.string('cor').notNullable();
    
        
    });
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('marcadores');
  
};
