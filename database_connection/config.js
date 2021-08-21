const knex = require('knex')({
    client: 'mysql',
    connection: {
        host:'localhost',
        user:'root' ,
        password:'Pragati@12' ,
        database:'javapoint'
    },

});

knex.schema.createTable("signup", (table) => {
    table.string('name');
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
})
    .then((data) => {
        console.log("Table Created");
    })
    .catch((err) => {
        console.log("Table Already Exist!!");
    })







knex.schema.createTable("create_post", (table) => {
    table.integer('id')
    table.string('message')
    table.string('Hobbies')

})
    .then((data) => {
        console.log("Table Created");
    })
    .catch((err) => {
        console.log("Table Already Exist!!");
    })




knex.schema.createTable("like_dislike", (table) => {
    table.integer('id')
    table.integer('like')
    table.integer('dislike')
    
})
    .then((data) => {
        console.log("Table Created");
    })
    .catch((err) => {
        console.log("Table Already Exist!!");
    })

module.exports = knex;


