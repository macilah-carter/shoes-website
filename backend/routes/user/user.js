const express = require('express');
const User = require('../../db/schema/user');
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require('jsonwebtoken')
const verify = require("../user/verifyUser")


const jwt_secret = process.env.JWT_TOKEN;

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server Error"});
    }
});

router.post('/signup', async (req, res) => {
    const {name, email, phone, password} = req.body;

    try {
        const userExist = await User.findOne({ email });
        if(userExist){
            return res.status(201).json({msg: "User exist"});
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, phone, password: hashedPassword});
        return res.status(200).json({msg: "Created user", user});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Servr Error"});
    }
});

router.post('/login', async (req, res) => {
    const { email, password} = req.body;
    try {
        if(!email || !password){
            return res.status(401).json({EmailPassword: "Email and password cannot be empty"});
        }
        const user = await User.findOne({ email });
        if (!user){
            return res.status(401).json({userError: "The user does not exist"});
        }
        const isValidPass = await bcrypt.compare(password, user.password);
        if(!isValidPass){
            return res.status(401).json({passwordError: "The password does not match the email"})
        }
        const token = jwt.sign({ userId: user._id}, jwt_secret, {
            expiresIn: "20m"
        })
        res.cookie('token',token, {httpOnly: true});
        return res.status(200).json({loginMsg: "login success",token: token, user: user})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Server Error"})
    }
});

router.post('/logout', async (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({msg: "logout succesfull"});
});

// Profile route
router.get('/profile',verify, async (req, res) => {
  try {
    const user = await User.findById({ _id }).select('-password');
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server Error" });
  }
});


module.exports = router;