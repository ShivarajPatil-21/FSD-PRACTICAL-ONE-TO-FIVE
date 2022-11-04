const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    createdOn: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('users', UserSchema);