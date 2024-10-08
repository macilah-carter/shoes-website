require('dotenv').config();
const DataBase = require("./db/db")
const user = require("./routes/user/user")
const shoes = require("./routes/shoes/shoes")
const orders = require("./routes/customer/customerOrder")
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const verify = require("./routes/user/verifyUser")
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const passport =require('passport')
const passportSetup = require('./config/passport-oauth')


const app = express()
const port = 8000

DataBase();

app.use(cors({
    origin: "https://shoes-website-frontend.vercel.app",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}
));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } // Set secure to true in production
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

app.use('/pics', express.static(path.join(__dirname, 'public/pics')));

app.use('/user', user)
app.use('/shoes', shoes)
app.use('/orders', orders);

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})