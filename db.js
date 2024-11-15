const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/practice")
// mongoose.connect("mongodb://localhost:27017/practice")
// default port for mongodb is 27017 and mongodb runs on this only 
async function connectToDatabase(){
    await mongoose.connect("mongodb://127.0.0.1:27017/practice") ;
    console.log("Connected to database")
}
connectToDatabase();
// mongoose.connect("mongodb://0.0.0.0/practice")
// only index.js will run but we need to break down the code to make it organise so we need to export and import .
module.exports = mongoose.connection;
