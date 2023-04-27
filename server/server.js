const dotenv = require('dotenv')
if(process.env.NODE_ENV !== "production"){
    dotenv.config();
}

const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');


//Models
const User = require('./models/Users.js');


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({secret: process.env.SECRET, resave: false, saveUninitialized: true}));

app.use(passport.session());

main().catch((err) => console.log(err));

async function main(){
    await mongoose.connect(
        process.env.DBKEY
    )
}

passport.use(
    new LocalStrategy({usernameField: 'email',
    passwordField: 'password'},async(username, password, done) => {
        try {
        console.log('used')
        const user = await User.findOne({email: username})

            console.log(user)
            if(!user){
                return done(null, false, {
                    message: "User not Found"
                })
            }
            bcrypt.compare(password, user.password, (err, res) => {
                if(res){
                    return done(null, user)
                } else{
                    return done(err, false, {
                        message: "Incorrect Password",
                    })
                }
            })
           
        } catch(err){
            return done(err)

        }}
        )

    )


passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(async function(id, done) {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch(err) {
        done(err);
    };
});

app.get('/', (req, res) => {
    res.json({message: "You have landed at '/'"})
})

app.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, async(err, hashedPassword) =>{
        if(err){
            console.log(err);
            res.json({message: "error"});
        }else{
            const newUser = new User({email: req.body.email, password: hashedPassword});
            await newUser.save();
            res.json({message: "success"});
        }
    }); 
})
app.use(passport.initialize());
app.post(  "/login",
passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/failed"
}))

app.listen(5000, () => {
    console.log("The server is running on port 5000");
})