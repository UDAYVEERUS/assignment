const jwt = require('jsonwebtoken')
const { passwrodValidate } = require('../../../common/password')
const users = require('../userSchema')
const SECRET_JWT = "itsasecret@1234"
const userLogin = async (req, res, next) => {
    try {
        // HERE WEWILL TAKE EMAIL AND PASSWORD FORM THE BODY
        const { mobile, password } = req.body

        // WE WILL FIND ANYONE EMAIL OR PASSWORD
        const user_response = await users.find({ mobile: mobile })

        // WE ARE COMPARING PASSWORD (USER INPUT PASSWORD OR REGISTRED PASSWORD)
        const passwordCompare = await passwrodValidate(password, user_response[0].password)

        // IF NOT PASSWORD THENN SENDING MESSAGE
        if(!passwordCompare){
            return res.status(402).json({
                message : "Invalid credentials",
                status : 402
            })
        }
        // HERE WE ARE TAKING ID FROM THE USER_RESPONSE
        const data = {
            users : {
                id : user_response._id
            }
        }

        // HERE WE ARE SIGNING VALIDATING USERID OR SECRET_JWT if validate success then  GET AUTH TOKEN
        const authToken = await jwt.sign(data,SECRET_JWT)
        // console.log(authToken,"here")
        return res.status(201).json({
            message : "login successfully",
            token : `${authToken}`
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
module.exports = userLogin