const jwt = require('jsonwebtoken')

var knex = require("../database_connection/config")
   

    module.exports.like_dislike = (req,res)=>{
        const userdata={
            id: req.body.id,
            like: req.body.like,
            dislike: req.body.dislike
        }

        knex('like_dislike').insert(userdata)
        
                .then((data) => {
                console.log(data);
                res.send("user successfully")
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ "message": err })
                })


            

             
  
        
            }



     