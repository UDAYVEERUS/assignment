const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user_id: mongoose.Types.ObjectId,
    ref: "users",
    required: true
},
{
    phone : {
        type : Number,
       required: true
    },
    total :{
        type : String,
        required : true
    },
    order_name :{
        type : String,
        required: true
    }
})
const orderModal1 = mongoose.model("orders", orderSchema)
module.exports = orderModal1