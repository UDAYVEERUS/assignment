const mongoose = require('mongoose')
require('dotenv').config()
// const MONGOURL = process.env.DATABASE_URL
const MONGOURL = process.env.DATABASE_URL
// console.log(MONGOURL)
const connectToMongo = () => {
    mongoose.connect(MONGOURL).then(console.log("connected successfully"))
}

mongoose.set("strictQuery",true)

module.exports = connectToMongo