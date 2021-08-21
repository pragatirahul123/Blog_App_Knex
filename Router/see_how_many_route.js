

var express = require('express')
var Router = express.Router()
var seemany_controller_api = require ("../controller/see_how_many")

Router.post("/",seemany_controller_api.see_post_many)


module.exports = Router

