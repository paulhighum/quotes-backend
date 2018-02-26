exports.up = function(knex, Promise){
  return knex.schema.createTable("comments", table => {
    table.increments("id").primary()
    table.integer("quote_id").references("quotes.id")
    table.text("comment")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.deleteTableIfExists("comments")
}
