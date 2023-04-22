const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy 

app.use(express.urlencoded({extended: true}));
app.use(express.json);


main().catch((err) => console.log(err));

async function main(){
    await mongoose.connect(
        "mongodb+srv://elamine:lamino20@itsdone.82cojli.mongodb.net/?retryWrites=true&w=majority"
    )
}


app.post('/signup', (req, res) => {
    
})

app.listen(5000, () => {
    console.log("The server is running on port 5000");
})