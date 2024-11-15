const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

require('./config/db');
const UserModel = require('./models/user.model')

app.set("view engine","ejs");
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send("hello");
});
app.get("/register",async(req,res)=>{
  

  const user =   await UserModel.create({
        name:"srishti",
        email:"srishti@gmail.com",
        password:"98765"
    })


    res.send("hello")
    console.log(user);
   
})

app.get("/allUsers",async function(req,res){
    const users = await UserModel.find()
    res.send(users)
})

app.get("/aUser",async function(req,res){
    const aUser = await UserModel.findOne({name:"jaggu"})
    res.send(aUser)
})

app.get("/UpdateUser",async function(req,res){
    const UpdateUser = await UserModel.findOneAndUpdate(
        {name:"hahahahahah"},
        {name:"jaggu",email:"hahahah@gmail.com"},
        {new:true}
        
    )
    res.send(UpdateUser)
    console.log(UpdateUser)
})

app.get("/DeleteUser",async function(req,res){
    const DeleteUser = await UserModel.findOneAndDelete(
        {name:"jaggu"}
    )
    res.send(DeleteUser)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});