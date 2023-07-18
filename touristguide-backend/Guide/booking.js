const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    packageId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'packages'
    },
    custId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'customers'
    },
    aid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'agencies'
    },
    isactive:{
        type:Boolean,
        default:true
    },
    date:Date,
    doj:Date,
    comments:String,
    isactive:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('packagebookings',Schema)

