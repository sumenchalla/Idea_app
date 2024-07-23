
/**
 * This model is created for stroing the users in the database
 * 
 * This model gives you idea about what are all the methods that a user can do
 */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required :true
    },
    userId: {
        type:String,
        required:true,
        unique :true
    },
    password:{
        type:String,
        required:true,
        minLength: 8
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    usertype:{
        type:String,
        required: true,
        default :"CUSTOMER",
        enum : ["CUSTOMER","ADMIN"]
    }
})