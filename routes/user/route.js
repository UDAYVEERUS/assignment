const express = require('express')
const userLogin = require('./login/login')
const postUser = require('./post/post')
const router = express.Router()

router.post("/add-user", postUser)
router.post("/login-user", userLogin)

module.exports = router
