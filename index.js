const mongoose = require('mongoose')
require('dotenv').config()
const express = require('express')
const connectToMongo = require('./common/db')
connectToMongo()

const app = express()
app.use(express.json())


app.use("/user", require('./routes/user/route'))

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server started at localhost:${port}`)
})