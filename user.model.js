// first require moongose , then make a schema then a model 
// in scehema we pass a object 
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password : String
});

module.exports = mongoose.model("user",userSchema)