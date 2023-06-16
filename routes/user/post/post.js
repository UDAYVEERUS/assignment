const mongoose = require('mongoose')
const { passwordGenerate } = require('../../../common/password')

const users = require('../userSchema')

const postUser = async(req, res, next) => {
    try {
        // console.log(req.body,"here")
        var {name, mobile, password} = req.body
        const passwordHash = await passwordGenerate(password)
        // console.log(passwordHash,"here")
        const user_response = await users.create({
            name,
            mobile,
            password: passwordHash
        })
        // console.log(user_response,"here")
        if (user_response) {
            return res.status(201).json({
                message: "account created successfully",
                data: user_response,
                status: 201
            })
        }
        return res.status(403).json({
            message: "fill correct details",
            status: 402
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            message : "something went wrong",
            status : 500
        })
    }
}

module.exports = postUser