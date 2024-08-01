const mongoose = require('mongoose');
const schema = mongoose.Schema;

const shoeSchema = new schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    colour:{
       type: [String],
       required: true
    },
    image:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Shoes', shoeSchema);