const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const UsersSchema = new mongoose.model("UsersSchema",UserSchema);

module.exports = UsersSchema;