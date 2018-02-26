exports.seed = function(knex, Promise){
  return knex("comments")
    .del()
    .then(function(){
      return knex("comments").insert([
        {
          id: 1,
          quote_id: 1,
          comment: "How inspirational!",
          name: "Balthazar"
        },
        {
          id: 2,
          quote_id: 2,
          comment: "Beautiful!",
          name: "Balthazar"
        },
        {
          id: 3,
          quote_id: 4,
          comment: "Moving!",
          name: "Balthazar"
        },
        {
          id: 4,
          quote_id: 3,
          comment: "Reminds me to be appreciative!",
          name: "Balthazar"
        },
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE comments_id_seq RESTART WITH 5;")
    })
}
