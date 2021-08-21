
const jwt = require('jsonwebtoken')



var knex = require("../database_connection/config")

   
    
    module.exports.create_post = (req,res)=>{
        if(req.headers.authorization !== undefined){
            var token = req.headers.authorization
            console.log(token)

            const userdata={

                id:req.body.id,
                message:req.body.message,
                Hobbies:req.body.Hobbies,
                
            }
            
                knex('create_post').insert(userdata)
        
                .then((data) => {
                console.log(data);
                res.send("user successfully")
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ "message": err })
                })

        }else{
            console.log("Not Login")


            }
        }
    





            
                



    




        
            

            
    
        

        
    


    
    
        


    




    

    

        
    

    

        


    

