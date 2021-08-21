var express = require('express')
var Router = express.Router()
var create_controller_api = require ("../controller/like_dislike")

Router.post("/",create_controller_api.like_dislike)


module.exports = Router

