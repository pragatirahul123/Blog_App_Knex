var express = require('express')
var Router = express.Router()
var create_controller_api = require ("../controller/create_poste")

Router.post("/",create_controller_api.create_post)


module.exports = Router

