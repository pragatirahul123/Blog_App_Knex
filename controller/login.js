const jwt = require('jsonwebtoken')



var knex = require("../database_connection/config")
module.exports.login_data = (req,res)=>{


    knex.select("email")
             .from("signup")
             .where("email", req.body.email)
             .andWhere("password",req.body.password)

            

             
                .then((data) => {
                    console.log(data);

                    const token = jwt.sign({email:req.body.email},"Pragati");
                    console.log(token)

                  

                    // var veri =jwt.verify(token, "Pragati")
                    // console.log(veri)



                    if(data.length){
                        res.send("Login successfully")
                    }   else{
                        console.log("wrong email")
                        res.send("wrong email")
                    }
                
            })
                .catch((err) => {
                    console.log(err);
                    res.json({ "message": err })
                    res.send("Invalid Successfull")
                })
        
            }


            
            
            

                



    



   