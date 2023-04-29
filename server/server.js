require('dotenv').config()


const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const cors = require('cors');


//Models
const User = require('./models/Users.js');


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


main().catch((err) => console.log(err));

async function main(){
    await mongoose.connect(
        process.env.DBKEY
    )
}



app.get('/userfind', (req,res) => {
})

app.post('/signup', (req, res) => {
    console.log(req.user)
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

app.post( "/login", async (req, res) => {
    const infoValidity = await User.findOne({email: req.body.email})
    if(infoValidity){
        bcrypt.compare(req.body.password, infoValidity.password, (err, Bres) => {
            if(Bres){
                res.json({
                    userID: infoValidity._id
                })
            }else{
                res.json({message: "Incorrect password"})
            }
        })
    }else{
        res.json({message: "User does not exist"})
    }
})

app.listen(5000, () => {
    console.log("The server is running on port 5000");
})