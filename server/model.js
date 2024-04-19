const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

userSchema.set("versionKey",false)

const users = mongoose.model('userlogins',userSchema)

const adminSchema = new mongoose.Schema({
    adminName:String,
    adminEmail:String,
    adminPassword:String,
})
adminSchema.set("versionKey",false)
const admins = mongoose.model("adminlogins",adminSchema)

module.exports = {users,admins}