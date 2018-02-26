exports.seed = function(knex, Promise){
  return knex("quotes")
    .del()
    .then(function(){
      return knex("quotes").insert([
        {
          id: 1,
          author: "James Wyatt",
          quote:
            "Whatever you deserve, freedom is what you have been given. Use your freedom as if you deserved it."
        },
        {
          id: 2,
          author: "Adelaide Anne Procter",
          quote:
            "We always may be what we might have been."
        },
        {
          id: 3,
          author: "Eleanor Roosevelt",
          quote:
            "Happiness is not a goal, it is a by-product."
        },
        {
          id: 4,
          author: "Neil Gaiman",
          quote:
            "The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So write and draw and build and play and dance and live as only you can."
        }
      ])
    })
}
