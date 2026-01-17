import mongoose, {Schema}  from "mongoose"

const helperSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    emailId:{
        type:String,
        require:true
    },
    address:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    sex:{
        type:String,
        enum:["Male","Female","Other"],
        required:true
    },
    contactNumber:{
      type:Number,
      required:true
    },
    experinceinYears:{
        type:Number,
        default:0
    },
    role:{
        type:[ "StaffBoy", "Nurse" ],
        required: true
    }
    }
)