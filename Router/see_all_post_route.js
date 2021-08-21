
var express = require('express')
var Router = express.Router()
var see_controller_api = require ("../controller/see_all_post")

Router.post("/",see_controller_api.see_post)


module.exports = Router