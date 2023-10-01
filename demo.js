const express = require('express');
const mongoose = require('mongoose');
const app= express();
const {MongoClint} = require('mongodb');

mongoose.connect('mongodb+srv://skanjarulhossain347:MHsxL99HhCYAz28n@cluster1.hrkgelw.mongodb.net/devtown')



const UserSchema = new mongoose.Schema({
    name: String,
    passion: String,
    hobby: String

})

const UserModel = mongoose.model("users",UserSchema)
app.get("/getUsers",(req ,res)=>{
    UserModel.find({}).then(function (users){
        res.json(users);
    })
    .catch(function (err){
        console.log(err)
    })

})


app.listen(3002, () => {
    console.log("server is running");
})

module.exports=UserModel