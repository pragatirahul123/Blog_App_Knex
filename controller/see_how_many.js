const jwt = require('jsonwebtoken')

var knex = require("../database_connection/config")

    module.exports.see_post_many = (req,res)=>{
        if(req.headers.authorization !== undefined){
            var token = req.headers.authorization
            console.log(token)

            

            knex.select('*').from('create_post')
            .join('like_dislike',function(){
                this.on('create_post.id','like_dislike.id')

            })

                .then((data) => {
                    console.log(data);
                //res.send("user successfully")
                    res.send(data)
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ "message": err })
                })
            

        
            

        }else{
            console.log("Not Login")
        
        }
    }



    
    

            
    
    