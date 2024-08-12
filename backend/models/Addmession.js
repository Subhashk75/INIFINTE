
import mongoose, { Types } from "mongoose";

const addmissionSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    profession:{
        type:String
    },
    message:{
        type:String
    }
});

const Addmission= mongoose.model("Addmission",addmissionSchema);

export default Addmission