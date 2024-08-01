const mongoose = require('mongoose');
const url = 'mongodb+srv://museemacilah:HY99pR5Z9Z61V1j4@website.2viiaas.mongodb.net/';


const DataBase = async () => {
    try {
       const connection = await mongoose.connect(url);
       console.log("Db Connected");
       
    } catch (error) {
        console.log(error)
    }
}

module.exports = DataBase;