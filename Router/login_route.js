var express = require('express')
var Router = express.Router()
var login_controller_api = require ("../controller/login")

Router.post("/",login_controller_api.login_data)


module.exports = Router


