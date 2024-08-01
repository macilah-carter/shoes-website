const mongoose = require('mongoose');

const schema = mongoose.Schema

const CustomerOrder = new schema({
    name:{
        type: String,
        default: "j4",
        
    },
    size:{
        type: Number,
        default:7
    },
    colour:{
        type: String,
        default:'blue'
    }
})

module.exports = mongoose.model('orders',CustomerOrder)