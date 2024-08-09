const mongoose = require('mongoose');
const { isEmail } = require('validator')
const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        unique: true,
        type: String,
        required: true,
        validate: [isEmail, 'Please enter a valid Email']
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'minimum password length is 6 characters']
    },
    googleid:{
        type:String
    }
});

module.exports = mongoose.model("User", userSchema);