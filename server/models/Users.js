const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const User = mongoose.model('users', UsersSchema)

module.exports = User;