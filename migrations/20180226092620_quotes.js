exports.up = function(knex, Promise){
  return knex.schema.createTable("quotes", table => {
    table.increments("id").primary()
    table.text("author")
    table.text("quote")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("quotes")
}
