const dotenv = require('dotenv')
if(process.env.NODE_ENV !== "production"){
    dotenv.config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({secret: process.env.SECRET, resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

main().catch((err) => console.log(err));

async function main(){
    await mongoose.connect(
        process.env.DBKEY
    )
}

app.post('/signup', (req, res) => {
    console.log(req.body.email)
    res.json({status: "good"})

})

app.listen(5000, () => {
    console.log("The server is running on port 5000");
})