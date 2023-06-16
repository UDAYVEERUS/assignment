const users = require('../userSchema')

const getUsers = async(req, res, next) => {
    try{
        const user_response = await users.find({})
        if(user_response){
            return res.status(200).json({
                message : "user fetched successfully",
                data : user_response,
                status : 200
            })
        }
        res.status(401).json({
            message : "unable to fetch users",
            status : 401
        })
    }
    catch(error){
        console.log(error)
    }
}

module.exports = getUsers