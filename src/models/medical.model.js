import mongoose, {Schema}  from "mongoose"

const medical_recordSchmea =new mongoose.Schmea({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    reord:{
        type:mongoose.Schmea.Types.ObjectId,
        ref:"hospital"
    },
    record_photo:{
        type:String,
        //required:true,
    },

},{timestamps:true})

export const record= mongoose.model("record",medical_recordSchmea)