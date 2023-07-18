const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    district:{
        type:String,
        required:true
    },
    
    city:{
        type:String,
        required:true
    },
    loc:{
        type:Number,
        required:true
    },
   
    
    travelmode:{
        type:String,
        required:true
    },
    distance:String,
   locType:String,

    
    isactive:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('packages',Schema)

