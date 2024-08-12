import mongoose from "mongoose";

// create new schema to store signup data of user
const userSchema = new mongoose.Schema({
    fullname:{
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
    }


});

//define schema to Model 
const User = mongoose.model("User", userSchema);
export default User;