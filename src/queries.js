const database = require("./database-connection")

module.exports = {
  list(table){
    return database(table).select()
  },
  read(id, table){
    return database(table)
      .select()
      .where("id", id)
      .first()
  },
  create(item, table){
    return database(table)
      .insert(item)
      .returning("*")
      .then(record => record[0])
  },
  update(item, id, table){
    return database(table)
      .update(item)
      .where("id", id)
      .returning("*")
      .then(record => record[0])
  },
  delete(id, table){
    return database(table)
      .delete()
      .where("id", id)
  },
  quoteWithComments(){
    return database("quotes")
      .join("comments", "quotes.id", "=", "comments.quote_id")
      .select(
        "quotes.id",
        { comment_id: "comments.id" },
        "quotes.author",
        "quotes.quote",
        "comments.name",
        "comments.comment"
      )
  }
}
