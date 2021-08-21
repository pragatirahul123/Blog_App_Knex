const bcrypyt = require('bcrypt')
const jwt = require('jsonwebtoken')



var knex = require("../database_connection/config")
   

    module.exports.create_data = (req,res)=>{
        const userdata={
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        knex.select("email")
                 .from("signup")
                 .where("email", req.body.email)
                .then((data) => {
                console.log(data)
                

                if (data==0){

                    knex('signup').insert(userdata)
                        .then((data) => {
                        console.log(data);
                        res.send("user successfully")
                    })
                    .catch((err) => {
                        console.log(err);
                        res.json({ "message": err })
                    })
                }else{
                    console.log("exists");
                    res.send("exits")

                    

                }
                })
        
    }


        
        
        





             


       



  

    
