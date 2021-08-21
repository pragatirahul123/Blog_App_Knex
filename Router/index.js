const express=require('express')
const router =express.Router()



var calling_api_post = require('./register_route')
router.use("/create",calling_api_post)


var calling_api_post = require('./login_route')
router.use("/login",calling_api_post)


var calling_api_post = require('./create_post_router')
router.use("/createpost",calling_api_post)


var calling_api_post = require('./see_all_post_route')
router.use("/seepost",calling_api_post)


var calling_api_post = require('./like_dislike_route')
router.use("/likedislike",calling_api_post)


var calling_api_post = require('./see_how_many_route')
router.use("/likedislikemany",calling_api_post)



module.exports = router

