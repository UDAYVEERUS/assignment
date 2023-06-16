const express = require('express')
const userLogin = require('./login/login')
const postUser = require('./post/post')
const getUsers = require('./get/get')
const router = express.Router()

router.post("/add-user", postUser)
router.post("/login-user", userLogin)
router.get("/get", getUsers)

module.exports = router
